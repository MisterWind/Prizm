import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-month-base-example',
  templateUrl: './input-month-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputMonthBaseExampleComponent {
  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));
}
