import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafeHtml } from '@angular/platform-browser';
import { action } from '@storybook/addon-actions';
import { ZyfraToastComponent } from './zyfra-toast.component';
import { ZyfraToastModule } from './zyfra-toast.module';
import { ZyfraButtonModule } from '../button';

export default {
  moduleId: module.id,
  title: 'Messages/Toast',
  component: ZyfraToastComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule, BrowserAnimationsModule, CommonModule, ZyfraButtonModule, ZyfraToastModule],
    }),
  ],
  parameters: {
    docs: {
      page: require('./zyfra-toast.component.story.doc.mdx').default,
    },
  },
} as Meta;

const Template: Story<ZyfraToastComponent> = (args) => ({
  template: `
    <zyfra-button
      (click)="$event.stopPropagation(); toast.showMessage()"
      label="for toast"
    ></zyfra-button>

    <zyfra-toast
      #toast
      [position]="position"
      [showTransitionOptions]="showTransitionOptions"
      [preventOpenDuplicates]="preventOpenDuplicates"
      [preventDuplicates]="preventDuplicates"
      [severity]="severity"
      [summary]="summary"
      [detail]="detail"
      [life]="life"
      [closable]="closable"
      [htmlTemplate]="htmlTemplate"
      (onClose)="onClose($event)"
    ></zyfra-toast>
  `,
  props: {
    ...args,
    onClose: action('onClose'),
  },
});

const htmlTemplate: SafeHtml = `
  <div>
    <p>content</p>
    <ul>
      <li>item 1 (for example)</li>
      <li><b>item 2</b></li>
    </ul>
</div>`;

export const Simple = Template.bind({});
Simple.args = {
  position: 'bottom-right',
  severity: 'success',
  summary: 'Info',
  detail: 'Message Content',
  preventDuplicates: false,
  preventOpenDuplicates: false,
  life: 30000,
};

export const NoIcons = Template.bind({});
NoIcons.args = {
  position: 'bottom-right',
  closable: false,
  detail: 'Message Content',
  life: 3000,
};

export const Animation = Template.bind({});
Animation.args = {
  position: 'bottom-left',
  detail: 'for Animation',
  life: 3000,
  showTransitionOptions: '3000ms ease-out',
  hideTransitionOptions: '3000ms ease-in',
};

export const CustomTemplate = Template.bind({});
CustomTemplate.args = {
  htmlTemplate,
  position: 'bottom-right',
  severity: 'success',
  summary: 'Info',
  detail: 'Message Content',
  life: 3000,
  closable: true,
};
