import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appParallaxCenter]',
  standalone: true,
})
export class ParallaxCenterDirective implements AfterViewInit {
  private parallaxSpeed = 0.5;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, 'parallax-center');
    this.updateParallaxEffect();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateParallaxEffect();
  }

  private isElementInViewport(): boolean {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0 &&
      rect.left < window.innerWidth && rect.right > 0
    );
  }

  private updateParallaxEffect() {
    const element = this.el.nativeElement;
    if (this.isElementInViewport()) {
      const scrollTop = window.pageYOffset;
      const offsetTop = element.offsetTop;
      const scrollPosition = scrollTop - offsetTop;
      const backgroundPositionY = `${scrollPosition * this.parallaxSpeed}px`;

      this.renderer.setStyle(
        element,
        'background-position',
        `center ${backgroundPositionY}`
      );
    } else {
      this.renderer.setStyle(element, 'background-position', 'center top');
    }
  }
}
