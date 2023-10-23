import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContentInvestComponent } from './phone-content-invest.component';

describe('PhoneContentInvestComponent', () => {
  let component: PhoneContentInvestComponent;
  let fixture: ComponentFixture<PhoneContentInvestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneContentInvestComponent]
    });
    fixture = TestBed.createComponent(PhoneContentInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
