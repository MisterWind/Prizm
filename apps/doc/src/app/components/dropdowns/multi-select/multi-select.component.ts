import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiContextWithImplicit,
  zuiPure,
  ZuiScrollbarVisibility,
} from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-multi-select-example',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent {
  readonly control = new FormControl();
  public emptyContent = 'Ничего не найдено';
  public searchable = false;
  public label = 'Выберите участника';
  public minDropdownHeight = 0;
  public maxDropdownHeight = 250;
  public placeholder = '';
  public visibility: ZuiScrollbarVisibility = 'auto';
  readonly itemsVariants: ReadonlyArray<string[] | null> = [
    [
      'Андрей Сафанов',
      'Сергей Марков',
      'Аня Петрова',
      'Катя Петрова',
      'Саша Дуров',
      'Влад Константинов',
      'Костя Щербаков',
      'Рустам Гусев',
      'Филип Уваров',
    ],
    null
  ];
  readonly valVariants: ReadonlyArray<string | null> =  [
    ...this.itemsVariants[0],
    null
  ];
  items: string[] | null = this.itemsVariants[0];


  set disabled(state: boolean) {
    if (state)
      this.control.disable();
    else
      this.control.enable()
  }
  get disabled(): boolean {
    return this.control.disabled;
  }

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/multi-select-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/multi-select-base-example.component.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/multi-select-with-template-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-template/multi-select-with-template-example.component.html'),
  };

  readonly exampleWithSearch: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-search/multi-select-with-search-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-search/multi-select-with-search-example.component.html'),
  };


  public valueTemplate: PolymorphContent<ZuiContextWithImplicit<any>> = ''
  @zuiPure
  public getValueTemplate (...temps: PolymorphContent[]): PolymorphContent<any>[] {
    return [
      null,
      ...temps
    ]
  }

  public get val(): string {
    return this.control.value;
  }

  public searchMatcher = (searchValue: string, item: unknown): boolean => {
    return item?.toString().toLowerCase().includes(searchValue.toLowerCase());
  }

  public identityMatcher = (a: unknown, b: unknown): boolean => {
    return a === b;
  };

  public stringify = (i: unknown): string => {
    return i?.toString?.() ?? '';
  };

  public setValue(val: string): void {
    this.control.setValue(val)
  }

}
