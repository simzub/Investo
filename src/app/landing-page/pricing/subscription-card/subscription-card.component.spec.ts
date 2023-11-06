import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionCardComponent } from './subscription-card.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgCheckComponent } from 'src/assets/svg/svg-check/svg-check.component';

describe('SubscriptionCardComponent', () => {
  let fixture: ComponentFixture<SubscriptionCardComponent>;
  let component: SubscriptionCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubscriptionCardComponent,
        SvgLogoComponent,
        SvgCheckComponent,
      ],
    });

    fixture = TestBed.createComponent(SubscriptionCardComponent);
    component = fixture.componentInstance;

    component.subscriptionData = {
      title: 'Your Subscription',
      monthlyPrice: '$10',
      annuallyPrice: '$100',
      description: 'Get access to premium features',
      features: ['Feature 1', 'Feature 2'],
      linkText: 'Sign Up',
    };
    component.activeOption = 'monthly';
    component.colorMode = 'light';

    fixture.detectChanges();
  });

  it('should create the SubscriptionCardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleElement = fixture.nativeElement.querySelector('.title-text');
    expect(titleElement.textContent).toContain('Your Subscription');
  });

  it('should display the monthly price when activeOption is monthly', () => {
    component.activeOption = 'monthly';
    fixture.detectChanges();
    const priceElement = fixture.nativeElement.querySelector('.price');
    expect(priceElement.textContent).toContain('$10');
  });

  it('should display the annually price when activeOption is annually', () => {
    component.activeOption = 'annually';
    fixture.detectChanges();
    const priceElement = fixture.nativeElement.querySelector('.price');
    expect(priceElement.textContent).toContain('$100');
  });

  it('should display the description', () => {
    const descriptionElement =
      fixture.nativeElement.querySelector('.description');
    expect(descriptionElement.textContent).toContain(
      'Get access to premium features'
    );
  });

  it('should have a list of features', () => {
    const featureElements = fixture.nativeElement.querySelectorAll('.feature');
    expect(featureElements.length).toBe(2);

    expect(featureElements[0].textContent).toContain('Feature 1');
    expect(featureElements[1].textContent).toContain('Feature 2');
  });

  it('should have a link to sign up', () => {
    const linkElement = fixture.nativeElement.querySelector('.link');
    expect(linkElement.textContent).toContain('Sign Up');
  });
});
