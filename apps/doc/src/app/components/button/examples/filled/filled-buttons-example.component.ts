import { Component } from '@angular/core';

@Component({
  selector: 'zui-filled-buttons-example',
  templateUrl: './filled-buttons-example.component.html',
  styles: [
    `
      .box {
        margin-bottom: 2rem;

        .title {
          margin-bottom: 0.5rem;
        }

        .content {

          display: flex;
          gap: 1rem;
        }
      }
    `
  ],
})
export class ZuiFilledButtonsExampleComponent {}
