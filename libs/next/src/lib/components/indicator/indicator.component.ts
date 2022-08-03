import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IndicatorStatus, IndicatorType } from './indicator.models';

@Component({
  selector: 'zui-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorComponent {
  @Input() public type: IndicatorType = 'simple';
  @Input() public status: IndicatorStatus = 'info';

  public readonly iconMap = {
    info: 'alerts-information-variant',
    secondary: 'alerts-information-variant',
    success: 'selection-check-simple',
    warning: 'alerts-mark',
    danger: 'alerts-mark',
  };
}
