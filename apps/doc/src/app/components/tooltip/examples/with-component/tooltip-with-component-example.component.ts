import { Component } from '@angular/core';
import { PolymorphComponent, ZuiOverlayOutsidePlacement } from '@digital-plant/zui-components';
import { ZuiTooltipSomeComponent } from './some.component';

@Component({
  selector: 'zui-tooltip-with-component-example',
  templateUrl: './tooltip-with-component-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiTooltipWithComponentExampleComponent {
  readonly component = new PolymorphComponent(ZuiTooltipSomeComponent);
  readonly direction = ZuiOverlayOutsidePlacement.TOP_RIGHT;
}
