import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsColumnComponent } from './reviews-column.component';

describe('ReviewsColumnComponent', () => {
  let component: ReviewsColumnComponent;
  let fixture: ComponentFixture<ReviewsColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsColumnComponent]
    });
    fixture = TestBed.createComponent(ReviewsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
