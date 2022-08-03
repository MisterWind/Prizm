import { Component } from '@angular/core';
import { ZuiTableComponent } from '../zui-table.component';
import { ZuiBaseSearchCellComponent } from '../base-table';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[zui-search-cell]',
  templateUrl: './search-cell.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiSearchCellComponent extends ZuiBaseSearchCellComponent {
  constructor(public readonly table: ZuiTableComponent) {
    super();
  }
}
