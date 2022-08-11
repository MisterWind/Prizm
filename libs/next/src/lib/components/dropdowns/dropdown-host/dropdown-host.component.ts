import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ZuiOverlayControl,
  ZuiOverlayOutsidePlacement,
  ZuiOverlayRelativePosition,
  ZuiOverlayService,
} from '../../../modules/overlay';
import { PolymorphContent } from '../../../directives';
import { debounceTime, delay, filter, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { animationFrameScheduler, BehaviorSubject, fromEvent, Observable, Subject, timer } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { zuiDefaultProp } from '../../../decorators';
import { ZUI_DROPDOWN_HOST_OPTIONS, ZuiDropdownHostOptions } from './dropdown-host.options';
import { ZuiDropdownHostWidth } from './models';

@Component({
  selector: 'zui-dropdown-host',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService
  ],
  exportAs: 'zui-dropdown-host'
})
export class ZuiDropdownHostComponent implements AfterViewInit {
  @Input() content: PolymorphContent;

  @Input()
  @zuiDefaultProp()
  zuiDropdownHostId: string = 'dropdownHostId_' + Math.random();

  @Input()
  @zuiDefaultProp()
  delay = 0;

  @Input()
  @zuiDefaultProp()
  zuiDropdownHostWidth?: ZuiDropdownHostWidth = this.options.width;

  @Input()
  @zuiDefaultProp()
  zuiDropdownHostCloseOnBackdropClick = this.options.closeOnBackdrop;

  private destroyReCalc$ = new Subject<void>();
  private _autoReposition = this.options.autoReposition;
  @Input() set autoReposition(state: boolean) {
    this.position?.updateConfig({autoReposition: this._autoReposition = state});
  }
  get autoReposition (): boolean {
    return this._autoReposition;
  }

  private _placement: ZuiOverlayOutsidePlacement = this.options.placement;
  @Input() set placement(place: ZuiOverlayOutsidePlacement) {
    this.position?.updateConfig({placement: place});
  }
  get placement(): ZuiOverlayOutsidePlacement {
    return this._placement;
  }

  @Input() set isOpen(state: boolean) {
    this.isOpen$.next(state);
  }

  @ViewChild('temp') temp: TemplateRef<HTMLDivElement>;

  @Output() readonly isOpenChange = new EventEmitter<boolean>();

  private overlay: ZuiOverlayControl;
  private isOpen$ = new BehaviorSubject(false);

  private readonly positionSource$ = new BehaviorSubject<string>('');
  readonly position$: Observable<string> = this.positionSource$.pipe(
    delay(0)
  );

  private position: ZuiOverlayRelativePosition;
  readonly wrapper_class = 'zui-overlay-dropdown-host no-overflow';

  @ViewChild('contentBlockRef') contentBlockRef: ElementRef;

  constructor(
    private readonly zuiOverlayService: ZuiOverlayService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(ZUI_DROPDOWN_HOST_OPTIONS) private readonly options: ZuiDropdownHostOptions,
    public readonly el: ElementRef<HTMLElement>,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroy$: ZuiDestroyService,
  ) {
    this.destroy$.addCallback(() => this.close());
  }

  public ngAfterViewInit(): void {
    this.initOverlay();
    this.initClickListener();
  }

  public updateWidth(): void {
    this.position.updateConfig({
      width: this.zuiDropdownHostWidth ??  this.el.nativeElement.offsetWidth
    })
  }

  private initClickListener(): void {
    this.overlay.listen('z_open').pipe(
      delay(0),
      switchMap(() => fromEvent<MouseEvent>(this.document, 'click').pipe(
        filter(() => this.overlay?.isOpen && this.zuiDropdownHostCloseOnBackdropClick),
        filter(({target}) => !this.document.getElementById(this.zuiDropdownHostId)?.contains(target as HTMLElement)),
        tap(() => this.close()),
        takeUntil( this.overlay.listen('z_close')),
      )),
      takeUntil(this.destroy$)
    ).subscribe();

    this.isOpen$.pipe(
      debounceTime(this.delay),
      tap((state) => {
        if (state) {
          this.open();
        } else {
          this.close();
        }
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  public close(): void {
    this.overlay?.close();
    this.isOpenChange.emit(false);
  }

  public open(): void {
    this.overlay?.open();
    this.isOpenChange.emit(true);
  }

  private initOverlay(): void {
    this.position = new ZuiOverlayRelativePosition({
      placement: this.placement,
      autoReposition: this.autoReposition,
      element: this.el.nativeElement,
    });
    this.overlay = this.zuiOverlayService
      .position(this.position)
      .config({wrapperClass: this.wrapper_class})
      .content(this.temp)
      .create();

    this.initPositionListener(this.position);
  }
  public reCalculatePositions(timeout = 0): void {
    this.destroyReCalc$.next()
    timer(timeout).pipe(
      tap(() => this.overlay?.reCalculatePositions()),
      takeUntil(this.destroy$),
      takeUntil(this.destroyReCalc$),
    ).subscribe();
  }

  private initPositionListener(position: ZuiOverlayRelativePosition): void {
    position.pos$.pipe(
      tap((data) => {
        if(!data.extra) return;
        this.positionSource$.next(data.extra);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
