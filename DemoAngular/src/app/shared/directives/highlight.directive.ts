import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private _el : ElementRef) { }
@HostListener('mouseenter') onMouseEnter(){
  this._el.nativeElement.style = 'background-color : yellow';
}
@HostListener('mouseleave') oMouseLeave(){
  this._el.nativeElement.style = 'background-color : transparent'
}

}
