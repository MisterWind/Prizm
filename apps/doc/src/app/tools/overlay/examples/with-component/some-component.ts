import { Component } from '@angular/core';

@Component({
  selector: 'prizm-overlay-some-component',
  template: `
    <div class="header">Header</div>
    <div class="button-box">
      <button *ngFor="let item of items" prizmButton>{{ item }}</button>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        background: yellow;
        padding: 15px;
      }

      .header {
        font-size: 30px;
        text-align: center;
        margin-bottom: 10px;
      }

      .button-box {
        display: grid;
        grid-template-rows: 1fr;
        gap: 8px;
      }

      button {
        width: 100%;
      }
    `,
  ],
})
export class PrizmOverlaySomeComponent {
  readonly items = ['Edit', 'Download'];
}
