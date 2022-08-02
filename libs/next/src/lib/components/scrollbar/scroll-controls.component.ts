import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, NgZone, Optional } from '@angular/core';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith, throttleTime } from 'rxjs/operators';
import { zuiFadeIn } from '../../animations';
import { zuiZoneOptimized } from '../../observables';
import { ZUI_ANIMATION_OPTIONS, ZUI_SCROLL_REF } from '../../tokens';
import { AnimationOptions } from '@angular/animations';

@Component({
    selector: 'zui-scroll-controls',
    templateUrl: './scroll-controls.component.html',
    styleUrls: ['./scroll-controls.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
      zuiFadeIn
    ],
})
export class ZuiScrollControlsComponent {
    readonly refresh$ = this.animationFrame$.pipe(
        throttleTime(300),
        map(() => this.scrollbars),
        startWith([false, false]),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        zuiZoneOptimized(this.ngZone),
    );

    readonly animation = {
        value: '',
        ...this.options
    } as const;

    constructor(
      @Inject(ZUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
      @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Optional()
        @Inject(ZUI_SCROLL_REF)
        private readonly scrollRef: ElementRef<HTMLElement> | null,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
    ) {}

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.scrollRef
            ? this.scrollRef.nativeElement
            : this.documentRef.documentElement;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
