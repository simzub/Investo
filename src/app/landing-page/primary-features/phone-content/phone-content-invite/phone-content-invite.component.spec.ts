import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneContentInviteComponent } from './phone-content-invite.component';

describe('PhoneContentInviteComponent', () => {
  let fixture: ComponentFixture<PhoneContentInviteComponent>;
  let component: PhoneContentInviteComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneContentInviteComponent],
    });

    fixture = TestBed.createComponent(PhoneContentInviteComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the PhoneContentInviteComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render invite description', () => {
    const description = fixture.nativeElement.querySelector('.description');
    expect(description).toBeTruthy();

    const header = description.querySelector('.description-header');
    expect(header.textContent).toContain('Invite people');

    const pElement = description.querySelector('p');
    expect(pElement.textContent).toContain('Get tips');
    const spanElement = pElement.querySelector('span');
    expect(spanElement.textContent).toContain('5s sooner');
  });

  it('should render input fields and invite button', () => {
    const itemContainer =
      fixture.nativeElement.querySelector('.item-container');
    expect(itemContainer).toBeTruthy();

    const labelTitles = itemContainer.querySelectorAll('.label-title');
    const labelContents = itemContainer.querySelectorAll('.label-content');
    const inviteButton = itemContainer.querySelector('.button');

    expect(labelTitles.length).toBe(2);
    expect(labelContents.length).toBe(2);

    expect(inviteButton.textContent).toContain('Invite person');
  });
});
