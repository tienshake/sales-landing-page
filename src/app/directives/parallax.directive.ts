import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements AfterViewInit {
  private parallaxSpeed = 0.5;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, 'parallax');
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
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
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
        `top ${backgroundPositionY}`
      );
    } else {
      this.renderer.setStyle(element, 'background-position', 'top');
    }
  }
}
