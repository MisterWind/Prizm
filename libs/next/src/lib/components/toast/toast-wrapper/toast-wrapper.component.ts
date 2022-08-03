import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Injector,
  Input,
  OnInit,
  Type,
  ViewEncapsulation,
} from '@angular/core';
import {ZuiToastRef} from "../toast-ref";

@Component({
  selector: 'zui-toast-wrapper',
  templateUrl: './toast-wrapper.component.html',
  styleUrls: ['./toast-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToastWrapperComponent implements OnInit {
  @Input() ref!: ZuiToastRef;

  @HostBinding('attr.id') get getRefId (): string {
    return 'zui-toast-id' + this.ref.id;
  }

  get component(): Type<unknown> {
    switch (this.ref.appearance) {
      case "danger":
        return this.ref.options.templateDanger;
      case "success":
        return this.ref.options.templateSuccess;
      case "info":
        return this.ref.options.templateInfo;
      case "warning":
        return this.ref.options.templateWarning;
    }
  }
  tempInjector: Injector;

  constructor(private readonly injector: Injector) {}

  public ngOnInit(): void {
    this.createInjectorForChild();
  }

  private createInjectorForChild(): void {
    this.tempInjector = Injector.create(
      {
        providers: [
          {
            provide: ZuiToastRef,
            useValue: this.ref
          }
        ],
        parent: this.injector
      }
    )
  }
}
