import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContentInviteComponent } from './phone-content-invite.component';

describe('PhoneContentInviteComponent', () => {
  let component: PhoneContentInviteComponent;
  let fixture: ComponentFixture<PhoneContentInviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneContentInviteComponent]
    });
    fixture = TestBed.createComponent(PhoneContentInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
