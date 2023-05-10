import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  //Handling user events
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red'); //3rd method
  }

   @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }


   private highlight(color: string) {
   this.el.nativeElement.style.backgroundColor = color;
  }
  //2nd method 
  // Passing values into an attribute directive
  @Input() appHighlight = ''; 
  @Input() defaultColor = '';

 
  
}
