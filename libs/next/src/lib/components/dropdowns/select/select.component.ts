import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { FormControl, NgControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { ZUI_SELECT_OPTIONS, ZuiSelectOptions } from './select.options';
import { ZuiContextWithImplicit, ZuiFocusableElementAccessor, ZuiNativeFocusableElement } from '../../../types';
import { ZuiInputSize } from '../../input';
import { AbstractZuiControl } from '../../../abstract/control';
import { zuiIsNativeFocused } from '../../../util';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ZuiSelectSearchMatcher } from './select.model';
import { ZUI_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { zuiDefaultProp } from '../../../decorators';
import { ZuiMultiSelectIdentityMatcher } from '../multi-select';
import { ZuiDropdownHostComponent } from '../dropdown-host';

@Component({
  selector: 'zui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService,
    {
      provide: ZUI_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => ZuiSelectComponent),
    },
  ],
  exportAs: 'zuiDropdownSelect'
})
export class ZuiSelectComponent<T>
extends AbstractZuiControl<T>
implements ZuiFocusableElementAccessor
{
  @ViewChild('focusableElementRef', {read: ElementRef})
  public readonly focusableElement?: ElementRef<HTMLElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: ZuiDropdownHostComponent;

  @Input() set items(data:T[]) {
    this.items$.next(data);
  }
  get items(): T[] {
    return this.items$.value;
  }

  @Input()
  @zuiDefaultProp()
  searchable = this.options.searchable;

  @Input() val: T;

  @Input()
  @zuiDefaultProp()
  label = this.options.label;

  @Input()
  @zuiDefaultProp()
  minDropdownHeight = this.options.minDropdownHeight;

  @Input()
  @zuiDefaultProp()
  maxDropdownHeight = this.options.maxDropdownHeight;

  @Input()
  @zuiDefaultProp()
  placeholder = this.options.placeholder;

  @Input()
  @zuiDefaultProp()
  size: ZuiInputSize =  this.options.size;

  @Input()
  @zuiDefaultProp()
  searchMatcher: ZuiSelectSearchMatcher<T> = this.options.searchMatcher;

  @Input()
  @zuiDefaultProp()
  emptyContent: string = this.options.emptyContent;

  @Input()
  @zuiDefaultProp()
  nullContent: string = this.options.nullContent;

  /**
   * need only clear function
   * */
  @Input()
  @zuiDefaultProp()
  stringify: (i:T, content?: string) => string = this.options.stringify;

  @Input()
  @zuiDefaultProp()
  identityMatcher: ZuiMultiSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @zuiDefaultProp()
  valueTemplate: PolymorphContent<ZuiContextWithImplicit<T> & {nullContent: string}> = this.options.valueContent;

  @Input()
  @zuiDefaultProp()
  outer: boolean = this.options.outer;

  public open = false;
  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new FormControl();

  readonly filteredItems$ = this.requiredInputControl.valueChanges.pipe(
    startWith(''),
    switchMap((value) => {
      return this.items$.pipe(
        map((items) => {
            if (!this.searchable || !value?.toString().replace(/[ ]+/g, '')) return items;
            const searchValue = this.searchValue = value.toString().trim();
            return items?.filter(
              (item) => this.searchMatcher(searchValue, item),
            ) ?? [];
          }
        ),
        map((items) => {
          if (this.nullContent && items?.length && items[0] !== null) {
            items = [
              null,
              ...items,
            ]
          }
          return items;
        }),
        tap((items) => {
          this.filteredItems = items;
          this.dropdownHostElement?.reCalculatePositions(1000/60);
        }),
        debounceTime(0),
        tap(() => this.safeOpenModal())
      )
    }),
  );

  public filteredItems: T[] = [];
  private searchValue: string;


  constructor(
    @Inject(ZUI_SELECT_OPTIONS) private readonly options: ZuiSelectOptions<T>,
    @Optional()
    @Self()
    @Inject(NgControl) control: NgControl | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
  ) {
    super(control, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initControlStatusChangerIfExist();
    this.initControlValueChangerIfExist();
  }

  private initControlStatusChangerIfExist(): void {
    this.control?.statusChanges.pipe(
      tap((value) => {
        if (value === 'DISABLED')
          this.requiredInputControl.disable();
        else if (!this.requiredInputControl.enabled)
          this.requiredInputControl.enable();
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  private initControlValueChangerIfExist(): void {
    this.control?.valueChanges.pipe(
      distinctUntilChanged(),
      tap((value) => {
        if (value) {
          value = this.items$.value?.find(
            i => this.identityMatcher(value, i),
          );
        }
        this.select(value);
        this.updateValue(value);
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  get nativeFocusableElement(): ZuiNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return zuiIsNativeFocused(this.nativeFocusableElement);
  }

  public onClear(): void {
    this.control?.setValue(null);
  }

  protected getFallbackValue(): T {
    return null;
  }

  public select(item: T): void {
    this.updateValue(item);
    this.requiredInputControl.setValue(this.stringify(item));
    this.open = false;
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement.nativeElement;
    if (
      !this.open &&
      this.interactive &&
      inputElement &&
      zuiIsNativeFocused(inputElement) &&
      (this.filteredItems?.length || this.searchValue)
    ) {
      this.open = true;
      this.changeDetectorRef.markForCheck();
    }
  }
}
