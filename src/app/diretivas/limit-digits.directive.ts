import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLimitDigits]'
})
export class LimitDigitsDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    const maxLength = 4;
    if (initialValue.length > maxLength) {
      this.el.nativeElement.value = initialValue.slice(0, maxLength);
      event.stopPropagation();
    }
  }
}
