import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-chip',
  templateUrl: './zyfra-chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraChipComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() image: string;
  @Input() removable: boolean;
  @Input() style: any;
  @Input() styleClass: string;
  @Input() removeIcon: string = 'zyfra-icon cancel-close';

  /* onRemove */
  @Output() onRemove: EventEmitter<unknown> = new EventEmitter();

  public onRemoveHandler(event: unknown): void {
    this.onRemove.emit(event);
  }
}
