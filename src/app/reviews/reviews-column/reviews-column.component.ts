import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-reviews-column',
  templateUrl: './reviews-column.component.html',
  styleUrls: ['./reviews-column.component.scss'],
})
export class ReviewsColumnComponent implements OnInit {
  @Input() reviews: any[] = [];
  @Input() animationDuration: string = '25s';

  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit() {
    const columnContentElement =
      this.el.nativeElement.querySelector('.column-content');

    const columnContentOverlayElement = this.el.nativeElement.querySelector(
      '.column-content-overlay'
    );
    // Check if the element is found before applying the animation
    if (columnContentElement && columnContentOverlayElement) {
      this.renderer.setStyle(
        columnContentElement,
        'animation-duration',
        this.animationDuration
      );
      this.renderer.setStyle(
        columnContentOverlayElement,
        'animation-duration',
        this.animationDuration
      );
    }
  }
}
