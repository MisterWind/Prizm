import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { IndicatorStatus, IndicatorType } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-example-indicators',
  templateUrl: './indicators-example.component.html',
  styleUrls: ['./indicators-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorsExampleComponent {
  public type: IndicatorType = 'simple';
  public status: IndicatorStatus = 'info';
  public readonly typeVariants: IndicatorType[] = ['simple', 'icon'];
  public readonly statusVariants: IndicatorStatus[] = ['info', 'secondary', 'success', 'warning', 'danger'];

  public readonly indicatorBasicExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/indicators-basic-example/indicators-basic-example.component'
    ),
    HTML: import('!!raw-loader!.//examples/indicators-basic-example/indicators-basic-example.component.html'),
    LESS: import('!!raw-loader!.//examples/indicators-basic-example/indicators-basic-example.component.less'),
  };

  public readonly indicatorIconExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/indicators-with-icon-example/indicators-with-icon-example.component'
    ),
    HTML: import(
      '!!raw-loader!.//examples/indicators-with-icon-example/indicators-with-icon-example.component.html'
    ),
    LESS: import(
      '!!raw-loader!.//examples/indicators-with-icon-example/indicators-with-icon-example.component.less'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
