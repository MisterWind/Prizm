import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITab } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-tabs-example-contained',
  templateUrl: './tabs-example-contained.component.html',
  styleUrls: ['./tabs-example-contained.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleContainedComponent {
  public tabs: ITab[] = [
    {
      title: 'Вкладка 1',
    },
    {
      title: 'Вкладка 2',
    },
    {
      title: 'Вкладка 3',
    },
    {
      title: 'Вкладка 4',
    },
    {
      title: 'Вкладка 5',
    },
  ];

  public tabCancelClick(): void {
    // do something
  }

  public tabClick(): void {
    // do something
  }
}
