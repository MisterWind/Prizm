import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay, PrizmInputSize, PrizmTime } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-date-example',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent {
  public readOnly = false;
  val: PrizmDay;
  public pseudoInvalid = false;
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public focusable = true;
  public pseudoState = '';
  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));

  public label = 'Абсолютное';
  public testIdPostfix: string;
  public placeholder = 'Выберите дату';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/date-base-example.component.ts?raw'),
    HTML: import('./examples/base/date-base-example.component.html?raw'),
  };

  readonly exampleNative: TuiDocExample = {
    TypeScript: import('./examples/native-date/native-date-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/date-base-example.component.html?raw'),
  };

  readonly exampleDouble: TuiDocExample = {
    TypeScript: import('./examples/range-separate/date-range-separate-example.component.ts?raw'),
    HTML: import('./examples/range-separate/date-range-separate-example.component.html?raw'),
  };
}
