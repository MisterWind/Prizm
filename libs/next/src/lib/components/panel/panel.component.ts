import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'zui-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent {
  @Input() withBackButton = false;
  @Input() header: string = null;
  @Input() subheader: string = null;

  @Output() backClick: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('headerElement', { static: true }) public headerRef: ElementRef;

  public back(): void {
    this.backClick.emit();
  }
}
