import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDesktopComponent } from './features-desktop.component';

describe('FeaturesDesktopComponent', () => {
  let component: FeaturesDesktopComponent;
  let fixture: ComponentFixture<FeaturesDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesDesktopComponent]
    });
    fixture = TestBed.createComponent(FeaturesDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
