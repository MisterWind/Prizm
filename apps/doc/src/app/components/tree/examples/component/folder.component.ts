import { Component, HostListener } from '@angular/core';
import { PrizmIconComponent, PrizmTreeItemContentComponent } from '@prizm-ui/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prizm-folders',
  template: `
    <prizm-icon class="prizm-space_right-2" [iconClass]="icon" size="16"></prizm-icon>
    <ng-container [ngTemplateOutlet]="context.template"></ng-container>
  `,
  styleUrls: ['folder.component.less'],
  standalone: true,
  imports: [PrizmIconComponent, CommonModule],
})
export class FoldersComponent extends PrizmTreeItemContentComponent {
  public get icon(): string {
    return this.isExpandable ? 'files-folder' : 'files-alarm';
  }

  @HostListener('click')
  public onHostClick(): void {
    this.onClick();
  }
}
