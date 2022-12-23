import { Location } from '@angular/common';
import {
  Directive,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { ActivatedRoute, Params, UrlSerializer } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import { prizmCoerceValue } from '../../utils/coerce-value';
import { PrizmDocumentationPropertyType } from '../../types/pages';
import { PrizmDocHostElementService } from '../host';

const SERIALIZED_SUFFIX = `$`;

// @bad TODO: refactor output and value sync
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `ng-template[documentationPropertyName]`,
  exportAs: `documentationProperty`,
})
export class PrizmDocDocumentationPropertyConnectorDirective<T> implements OnInit, OnChanges {
  @Input()
  documentationPropertyName = ``;

  @Input()
  documentationPropertyMode: PrizmDocumentationPropertyType = null;

  @Input()
  documentationPropertyType = ``;

  @Input()
  documentationPropertyValue!: T;

  @Input()
  documentationPropertyDeprecated = false;

  @Input()
  documentationPropertyValues: readonly T[] | null = null;

  @Output()
  readonly documentationPropertyValueChange = new EventEmitter<T>();

  readonly changed$ = new Subject<void>();

  readonly emits$ = new BehaviorSubject(1);

  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    @Inject(Location) private readonly locationRef: Location,
    @Inject(ActivatedRoute) private readonly activatedRoute: ActivatedRoute,
    @Inject(UrlSerializer) private readonly urlSerializer: UrlSerializer,
    public readonly hostElementService: PrizmDocHostElementService
  ) {}

  ngOnInit(): void {
    this.parseParams(this.activatedRoute.snapshot.queryParams);
  }

  get attrName(): string {
    switch (this.documentationPropertyMode) {
      case `input`:
        return `[${this.documentationPropertyName}]`;
      case `output`:
        return `(${this.documentationPropertyName})`;
      case `input-output`:
        return `[(${this.documentationPropertyName})]`;
      default:
        return this.documentationPropertyName;
    }
  }

  get hasItems(): boolean {
    return !!this.documentationPropertyValues;
  }

  get shouldShowValues(): boolean {
    return this.documentationPropertyMode !== `output`;
  }

  ngOnChanges(): void {
    this.changed$.next();
    this.hostElementService.addListener(
      this.documentationPropertyMode,
      this.documentationPropertyType,
      this.documentationPropertyName
    )
  }

  public onValueChange(value: T): void {
    this.documentationPropertyValue = value;
    this.documentationPropertyValueChange.emit(value);
    this.setQueryParam(value);
  }

  public emitEvent(event: unknown): void {
    // For more convenient debugging
    // eslint-disable-next-line no-restricted-syntax
    console.info(this.attrName, event);

    this.emits$.next(this.emits$.value + 1);
  }

  private parseParams(params: Params): void {
    const propertyValue: string | undefined = params[this.documentationPropertyName];
    const propertyValueWithSuffix: string | number | undefined =
      params[`${this.documentationPropertyName}${SERIALIZED_SUFFIX}`];

    if (!propertyValue && !propertyValueWithSuffix) {
      return;
    }

    const value =
      !!propertyValueWithSuffix && this.documentationPropertyValues
        ? this.documentationPropertyValues[propertyValueWithSuffix as number]
        : prizmCoerceValue(propertyValue);

    this.onValueChange(value as T);
  }

  private setQueryParam(value: T | string | number | boolean | null): void {
    const tree = this.urlSerializer.parse(this.locationRef.path());

    const isValueAvailableByKey = value instanceof Object;
    const computedValue =
      isValueAvailableByKey && this.documentationPropertyValues
        ? this.documentationPropertyValues.indexOf(value as T)
        : value;

    const suffix = isValueAvailableByKey ? SERIALIZED_SUFFIX : ``;
    const propName = this.documentationPropertyName + suffix;

    tree.queryParams = {
      ...tree.queryParams,
      [propName]: computedValue,
    };

    this.locationRef.go(String(tree));
  }
}
