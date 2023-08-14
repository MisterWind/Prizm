import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDateItemTemplate, PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-multi-four-example',
  templateUrl: './input-date-multi-four-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
      prizm-input-date-multi {
        width: 20rem;
      }
    `,
  ],
})
export class PrizmInputDateMultiFourExampleComponent implements OnInit {
  @ViewChild('dateTime', { static: true }) dateTime: TemplateRef<unknown>;
  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime: TemplateRef<unknown>;
  @ViewChild('time', { static: true }) time: TemplateRef<unknown>;
  @ViewChild('date', { static: true }) date: TemplateRef<unknown>;
  public readonly dateTimeControl = new UntypedFormControl([
    new PrizmDay(2017, 2, 15),
    new PrizmTime(12, 30),
  ]);
  public readonly relativeControl = new UntypedFormControl();
  public readonly dateControl = new UntypedFormControl(new PrizmDay(2017, 0, 15));
  public readonly timeControl = new UntypedFormControl(new PrizmTime(12, 30, 25));
  public items: PrizmDateItemTemplate[] = [];

  public ngOnInit(): void {
    this.items = [
      {
        template: this.dateTime,
        name: 'Абсолютное время',
      },
      {
        template: this.dateRelativeTime,
        name: 'Относительное время',
      },
      {
        template: this.time,
        name: 'Только время',
      },
      {
        template: this.date,
        name: 'Только дата',
      },
    ];
  }
}
