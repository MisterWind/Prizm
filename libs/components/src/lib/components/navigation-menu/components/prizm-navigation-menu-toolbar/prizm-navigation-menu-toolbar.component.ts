import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { PrizmNavigationMenuSearchConfig, PrizmNavigationMenuToolbarConfig } from '../../interfaces';
import { PrizmNavigationMenuToolbarService } from '../../services/prizm-navigation-menu-toolbar.service';

@Component({
  selector: 'prizm-navigation-menu-toolbar',
  templateUrl: './prizm-navigation-menu-toolbar.component.html',
  styleUrls: ['./prizm-navigation-menu-toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmNavigationMenuToolbarComponent {
  @Input() toolbarExtraTemplate: TemplateRef<unknown>;

  @Input() searchConfig: PrizmNavigationMenuSearchConfig;

  @Input() toolbarConfig: PrizmNavigationMenuToolbarConfig;

  get toolbarIsNotEmpty(): boolean {
    return this.toolbarConfig && Object.values(this.toolbarConfig).some(Boolean);
  }

  constructor(public toolbarService: PrizmNavigationMenuToolbarService) {}
}
