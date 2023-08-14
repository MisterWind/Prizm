import { Component, ElementRef, ViewChild } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-theme-inverted-example',
  templateUrl: './inverted.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
      .zone {
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
    `,
  ],
})
export class PrizmThemeInvertedExampleComponent {
  @ViewChild('zone', { static: true, read: ElementRef }) el: ElementRef;
  public invetedThemeValue: string;
  constructor(public readonly theme: PrizmThemeService) {}

  public light(): void {
    this.theme.update('light', this.el.nativeElement);
  }

  public dark(): void {
    this.theme.update('dark', this.el.nativeElement);
  }

  public toggle(): void {
    this.theme.update(
      this.theme.getByElement(this.el.nativeElement) === 'light' ? 'dark' : 'light',
      this.el.nativeElement
    );
  }
}
