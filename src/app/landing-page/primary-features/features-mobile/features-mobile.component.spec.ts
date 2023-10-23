import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesMobileComponent } from './features-mobile.component';

describe('FeaturesMobileComponent', () => {
  let component: FeaturesMobileComponent;
  let fixture: ComponentFixture<FeaturesMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesMobileComponent]
    });
    fixture = TestBed.createComponent(FeaturesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
