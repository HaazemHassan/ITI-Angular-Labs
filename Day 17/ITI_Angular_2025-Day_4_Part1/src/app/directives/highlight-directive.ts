import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirective {
  constructor(el: ElementRef) {
  (el.nativeElement as HTMLElement).style.backgroundColor = 'yellow';
  }
}
