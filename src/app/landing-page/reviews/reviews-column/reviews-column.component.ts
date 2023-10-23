import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Review } from '../reviews.component';

@Component({
  selector: 'app-reviews-column',
  templateUrl: './reviews-column.component.html',
  styleUrls: ['./reviews-column.component.scss'],
})
export class ReviewsColumnComponent implements OnInit {
  @Input() reviews: Review[] = [];
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
