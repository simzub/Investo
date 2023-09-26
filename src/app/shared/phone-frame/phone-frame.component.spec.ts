import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFrameComponent } from './phone-frame.component';

describe('PhoneFrameComponent', () => {
  let component: PhoneFrameComponent;
  let fixture: ComponentFixture<PhoneFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneFrameComponent]
    });
    fixture = TestBed.createComponent(PhoneFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
