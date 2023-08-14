import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-input-number-counter-example',
  templateUrl: './input-number-counter-example.component.html',
  styleUrls: ['./input-number-counter-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberCounterExampleComponent {
  public requiredInputControl = new UntypedFormControl(2, Validators.required);
}
