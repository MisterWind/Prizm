import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface ITableProduct {
  id?: number | string;
  code: string;
  name: string;
  category: string;
  count: number;
}

@Component({
  selector: 'zui-table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBasicExampleComponent {
  public products: ITableProduct[] = [
    {
      code: '123',
      name: 'Name 1',
      category: 'Premium',
      count: 3000,
    },
    {
      code: '456',
      name: 'Name 2',
      category: 'Active',
      count: 123,
    },
    {
      code: '789',
      name: 'Name 3',
      category: 'Sport',
      count: 56000,
    },
    {
      code: '012',
      name: 'Name 4',
      category: 'Sport+',
      count: 539,
    },
    {
      code: '1234',
      name: 'Name 5',
      category: 'Premium',
      count: 23,
    },
    {
      code: '1234',
      name: 'Name 6',
      category: 'Premium',
      count: 99,
    },
  ];
}
