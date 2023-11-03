import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReviewsColumnComponent } from './reviews-column/reviews-column.component';
import { ReviewsComponent } from './reviews.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';

@NgModule({
  declarations: [ReviewsColumnComponent, ReviewsComponent],
  imports: [CommonModule, SvgAssetsModule],
  exports: [ReviewsComponent],
})
export class ReviewsModule {}
