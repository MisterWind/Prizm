import { Directive, Injector, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';

import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';
import { PolymorphContent } from '../../../../directives/polymorph';

@Directive({
  selector: '[zuiInputStatusText]',
  providers: [ZuiDestroyService],
})
export class ZuiInputStatusTextDirective extends DefaultInputInvalidTextClass {
  public templateRef: TemplateRef<any>;
  public readonly changed: Subject<void> = new Subject<void>();

  constructor(injector: Injector) {
    super(injector);

    this.templateRef = injector.get(TemplateRef);
  }

  protected override setInvalidText(text: string): void {
    super.setInvalidText(text);

    this.changed.next();
  }

  public getStatusMessage(): PolymorphContent {
    return this.invalidText || this.templateRef;
  }
}

