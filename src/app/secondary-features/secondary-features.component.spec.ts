import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFeaturesComponent } from './secondary-features.component';

describe('SecondaryFeaturesComponent', () => {
  let component: SecondaryFeaturesComponent;
  let fixture: ComponentFixture<SecondaryFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryFeaturesComponent]
    });
    fixture = TestBed.createComponent(SecondaryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
