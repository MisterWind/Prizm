import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { ZUI_SCROLLABLE } from '../../constants/events';

@Directive({
    selector: '[zuiScrollable]',
})
export class ZuiScrollableDirective implements OnInit {
    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.dispatchEvent(
            new CustomEvent(ZUI_SCROLLABLE, {
                bubbles: true,
                detail: this.elementRef.nativeElement,
            }),
        );
    }
}
