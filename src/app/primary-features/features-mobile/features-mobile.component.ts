import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-features-mobile',
  templateUrl: './features-mobile.component.html',
  styleUrls: ['./features-mobile.component.scss'],
})
export class FeaturesMobileComponent implements OnInit {
  activeSlideIndex = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  setActiveSlide(index: number) {
    this.activeSlideIndex = index;
    const layoutElement = this.el.nativeElement.querySelector('.layout');
    const scrollWidth = layoutElement.scrollWidth;
    const clientWidth = layoutElement.clientWidth;

    switch (this.activeSlideIndex) {
      case 0:
        this.setScrollBarPosition(layoutElement, 0);
        break;
      case 1:
        this.setScrollBarPosition(
          layoutElement,
          (scrollWidth - clientWidth) / 2
        );
        break;
      case 2:
        this.setScrollBarPosition(layoutElement, scrollWidth - clientWidth);
        break;
    }

    console.log(this.activeSlideIndex);
  }

  private setScrollBarPosition(element: HTMLElement, position: number) {
    this.renderer.setProperty(element, 'scrollLeft', position);
  }
}
