import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PrizmDateTime,
  PrizmDateTimeRange,
  PrizmDay,
  PrizmDayRange,
  PrizmInputSize,
  PrizmTime,
  PrizmTimeMode,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-time-range-example',
  templateUrl: './input-date-time-range.component.html',
  styleUrls: ['./input-date-time-range.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateTimeRangeComponent {
  public label = 'Период';
  readonly value = new UntypedFormControl(
    new PrizmDateTimeRange(new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 2, 10)))
  );
  readonly min = new PrizmDateTime(new PrizmDay(2000, 2, 20), new PrizmTime(0, 0));
  readonly max = new PrizmDateTime(new PrizmDay(2040, 2, 20), new PrizmTime(0, 0));
  public placeholder = 'Выберите период';
  public testIdPostfix: string;
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public focusable = true;
  public pseudoState = '';
  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public pseudoInvalid = false;
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public readOnly = false;
  public timeStrict = false;
  public timeModeVariants: ReadonlyArray<PrizmTimeMode> = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS'];
  public timeMode: PrizmTimeMode = `HH:MM`;
  public focusVisibleChange = false;
  public val1: any[];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-date-time-range-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-date-time-range-base-example.component.html?raw'),
  };

  readonly exampleDisabled: TuiDocExample = {
    TypeScript: import('./examples/disabled/input-date-time-range-disabled-example.component.ts?raw'),
    HTML: import('./examples/disabled/input-date-time-range-disabled-example.component.html?raw'),
  };

  readonly exampleNativeDate: TuiDocExample = {
    TypeScript: import('./examples/native-date/input-native-date-time-range-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/input-native-date-time-range-base-example.component.html?raw'),
  };
}
