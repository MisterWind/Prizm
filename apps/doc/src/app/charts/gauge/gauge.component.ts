import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSize } from '@prizm-ui/components';
import { PrizmChartsGaugeOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './gauge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaugeComponent {
  public options: PrizmChartsGaugeOptions = {
    range: {
      color: '#30BF78',
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    axis: {
      label: {
        formatter(v): number {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
  };
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('./examples/base/prizm-charts-gauge-example.component.ts?raw'),
    HTML: import('./examples/base/prizm-charts-gauge-example.component.html?raw'),
  };

  public percent = 0.55;
  public height = 300;
  public width: number | null = null;
  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
