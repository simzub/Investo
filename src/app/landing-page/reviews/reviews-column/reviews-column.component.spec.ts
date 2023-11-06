// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReviewsColumnComponent } from './reviews-column.component';

// describe('ReviewsColumnComponent', () => {
//   let component: ReviewsColumnComponent;
//   let fixture: ComponentFixture<ReviewsColumnComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ReviewsColumnComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ReviewsColumnComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render reviews column', () => {
//     const columnElement = fixture.nativeElement.querySelector('.column');

//     expect(columnElement).toBeTruthy();

//     const reviewTitles =
//       fixture.nativeElement.querySelectorAll('.review-title');
//     expect(reviewTitles.length).toEqual(component.reviews.length);
//     expect(reviewTitles[0].textContent).toContain(component.reviews[0].title);
//   });
// });
