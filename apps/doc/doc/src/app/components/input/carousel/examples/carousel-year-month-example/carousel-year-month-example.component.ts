import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmCarouselYearMonth, PrizmCarouselYearMonthValue } from '@prizm-ui/components';

@Component({
  selector: 'prizm-carousel-year-month-example',
  templateUrl: './carousel-year-month-example.component.html',
  styleUrls: ['./carousel-year-month-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCarouselYearMonthExampleComponent {
  carouselContent = new PrizmCarouselYearMonth();
  currentValue: PrizmCarouselYearMonthValue;

  constructor() {
    const currentDate = new Date();
    this.currentValue = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 };
  }
}
