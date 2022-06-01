export function zuiSetNativeFocused(
    element: HTMLOrSVGElement,
    focused: boolean = true,
    preventScroll: boolean = false,
): void {
    if (focused) {
        element.focus({preventScroll});
    } else {
        element.blur();
    }
}
