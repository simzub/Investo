import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsComponent } from './reviews.component';
import { ReviewsColumnComponent } from './reviews-column/reviews-column.component';
import { SvgDeviceClockComponent } from 'src/assets/svg/device/svg-device-clock/svg-device-clock.component';
import { SvgStarComponent } from 'src/assets/svg/svg-star/svg-star.component';

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ReviewsComponent,
        ReviewsColumnComponent,
        SvgDeviceClockComponent,
        SvgStarComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render reviews section', () => {
    const reviewsSection = fixture.nativeElement.querySelector('#reviews');
    expect(reviewsSection).toBeTruthy();
  });
});
