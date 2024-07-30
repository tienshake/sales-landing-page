import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  AfterViewInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true,
})
export class LazyLoadDirective implements AfterViewInit {
  @Input('appLazyLoad') imgSrc!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setInitialStyles();
    if (!this.imgSrc) {
      this.imgSrc = this.el.nativeElement.getAttribute('src');
      this.el.nativeElement.src = '';
    }
    this.checkIfInView();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkIfInView();
  }

  private setInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 1s');
  }

  private checkIfInView() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      this.loadImage();
    }
  }

  private loadImage() {
    const img = this.el.nativeElement;
    if (this.imgSrc) {
      img.src = this.imgSrc;
      this.renderer.setStyle(img, 'opacity', '1');
    }
  }
}
