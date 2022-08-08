import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { NgControl, Validators, ControlValueAccessor } from '@angular/forms';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';

import { ZuiInputControl } from '../common/base/input-control.class';
import { ZuiCarouselContent } from './carousel-content/carousel-content.interface';

@Component({
  selector: 'zui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ZuiInputControl, useExisting: ZuiCarouselComponent }, ZuiDestroyService],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-filled]': '!empty',
    class: 'zui-carousel',
    tabindex: '0',
  },
})
export class ZuiCarouselComponent extends ZuiInputControl<any> implements ControlValueAccessor {
  /**
   * Disabled input
   */
  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
    this.stateChanges.next();
  }

  private _disabled = false;

  /**
   * Required input
   */
  @Input()
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }

  set required(value: boolean) {
    this._required = value;
    this.stateChanges.next();
  }

  private _required: boolean | undefined;

  public invalid = false;

  /**
   * Input value input
   */
  private _value: any;

  get value(): any {
    if (this.ngControl) {
      return this.ngControl.value;
    }

    return this._value;
  }

  @Input()
  set value(value: any) {
    if (this.ngControl) {
      this.ngControl.control?.patchValue(value);
      return;
    }

    this.writeValue(value);
  }

  @Input() carouselContent: ZuiCarouselContent;

  @Input() lightMode = false;

  hasClearButton = false;
  nativeElementType = 'carousel';

  changeFn: (value: number) => void;
  touchedFn: () => void;

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    private el: ElementRef,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();

    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  empty = true;
  focused = false;

  private _touched = false;
  get touched(): boolean {
    if (this.ngControl) {
      return this.ngControl.touched;
    }

    return this._touched;
  }

  public writeValue(obj: any): void {
    this._value = obj;
    this.carouselContent.setCurrentValue(obj);

    this.updateEmptyState();
    this.stateChanges.next();
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touchedFn = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public left(): void {
    if (this.carouselContent.controlsState.leftCtrlDisabled) return;
    this.carouselContent.left();
    this.update();
  }

  public stepLeft(): void {
    if (this.carouselContent.controlsState.stepleftCtrlDisabled) return;
    this.carouselContent.stepLeft();
    this.update();
  }

  public stepRight(): void {
    if (this.carouselContent.controlsState.stepRightCtrlDisabled) return;
    this.carouselContent.stepRight();
    this.update();
  }

  public right(): void {
    if (this.carouselContent.controlsState.rightCtrlDisabled) return;
    this.carouselContent.right();
    this.update();
  }

  private update(): void {
    this._value = this.carouselContent.currentValue;
    if (this.ngControl) {
      this.changeFn(this._value);
      this.touchedFn();
    }

    this._touched = true;

    this.cdr.detectChanges();
  }

  private updateEmptyState(): void {
    this.empty = this.carouselContent.currentValueNotSet;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('focus', ['$event'])
  onFocus(): void {
    this.focused = true;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('blur', ['$event'])
  onBlur(): void {
    this.focused = false;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowleft', ['$event']) onArrowLeft(event: KeyboardEvent): void {
    event.preventDefault();
    this.stepLeft();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowright', ['$event']) onArrowRight(event: KeyboardEvent): void {
    event.preventDefault();
    this.stepRight();
  }

  public focus(): void {
    this.el.nativeElement.focus();
  }

  public clear(): void {
    console.log('clear');
  }
}

