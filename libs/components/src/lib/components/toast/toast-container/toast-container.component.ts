import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  ViewEncapsulation,
} from '@angular/core';
import { PrizmToastRef } from '../toast-ref';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmToastPosition } from '../types';
import { PrizmToastService } from '../toast.service';
import { PrizmAbstractTestId } from '../../../abstract/interactive';

@Component({
  selector: 'prizm-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PrizmToastContainerComponent extends PrizmAbstractTestId implements OnChanges {
  /* get from overlay service after add this component */
  refs$: Observable<PrizmToastRef[]>;

  @Input() containerId?: string;
  @Input() position?: PrizmToastPosition;

  override readonly testId_ = 'ui_toast_container';

  constructor(private readonly prizmToastService: PrizmToastService) {
    super();
  }

  ngOnChanges(): void {
    this.refs$ =
      (this.containerId
        ? this.prizmToastService.changes$.pipe(
            map(refs => refs.filter(ref => ref.position === this.containerId))
          )
        : this.refs$) ?? of([]);
  }

  public trackByHash(_: number, item: PrizmToastRef): string {
    return item.hash;
  }
}
