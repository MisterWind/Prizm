import { Directive, HostListener } from '@angular/core';
import { EditableColumn } from 'primeng/table';

@Directive({
  selector: '[zuiEditableColumn]',
  providers: [{ provide: EditableColumn, useClass: ZuiEditableColumnDirective }],
})
export class ZuiEditableColumnDirective extends EditableColumn {
  public override onClick(event: MouseEvent): void {
    // doing nothing, redefining parent class method
  }

  @HostListener('dblclick', ['$event'])
  public onDblClick(event: MouseEvent): void {
    super.onClick(event);
  }
}
