import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBgColor('#5bc0de')
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('black')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('#5bc0de')
  }
}
