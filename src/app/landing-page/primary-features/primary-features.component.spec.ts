import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryFeaturesComponent } from './primary-features.component';

describe('PrimaryFeaturesComponent', () => {
  let component: PrimaryFeaturesComponent;
  let fixture: ComponentFixture<PrimaryFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryFeaturesComponent]
    });
    fixture = TestBed.createComponent(PrimaryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
