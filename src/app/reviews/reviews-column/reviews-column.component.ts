import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-column',
  templateUrl: './reviews-column.component.html',
  styleUrls: ['./reviews-column.component.scss'],
})
export class ReviewsColumnComponent {
  @Input() reviews: any[] = [];
}
