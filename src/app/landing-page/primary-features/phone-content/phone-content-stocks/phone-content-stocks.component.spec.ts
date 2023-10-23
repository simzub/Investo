import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContentStocksComponent } from './phone-content-stocks.component';

describe('PhoneContentStocksComponent', () => {
  let component: PhoneContentStocksComponent;
  let fixture: ComponentFixture<PhoneContentStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneContentStocksComponent]
    });
    fixture = TestBed.createComponent(PhoneContentStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
