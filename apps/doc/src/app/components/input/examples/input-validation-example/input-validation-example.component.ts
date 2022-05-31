import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'zyfra-input-validation-example',
  templateUrl: './input-validation-example.component.html',
  styleUrls: ['./input-validation-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputValidationExampleComponent {
  public requiredInputControl = new FormControl('', Validators.required);
}
