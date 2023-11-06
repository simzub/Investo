import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingComponent } from './pricing.component';
import { SubscriptionCardComponent } from './subscription-card/subscription-card.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgCheckComponent } from 'src/assets/svg/svg-check/svg-check.component';

describe('PricingComponent', () => {
  let fixture: ComponentFixture<PricingComponent>;
  let component: PricingComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PricingComponent,
        SubscriptionCardComponent,
        SvgLogoComponent,
        SvgCheckComponent,
      ],
      imports: [BrowserAnimationsModule],
    });

    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;

    component.activeOption = 'monthly';

    fixture.detectChanges();
  });

  it('should create the PricingComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleElement = fixture.nativeElement.querySelector('.title');
    expect(titleElement.textContent).toContain(
      'Flat pricing, no management fees.'
    );
  });

  it('should display the description', () => {
    const descriptionElement =
      fixture.nativeElement.querySelector('.description');
    expect(descriptionElement.textContent).toContain(
      'Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you.'
    );
  });

  it('should have monthly and annually options', () => {
    const monthlyOption =
      fixture.nativeElement.querySelector('.monthly-option');
    const annuallyOption =
      fixture.nativeElement.querySelector('.annually-option');
    expect(monthlyOption).toBeTruthy();
    expect(annuallyOption).toBeTruthy();
  });

  it('should render subscription cards', () => {
    const subscriptionCards = fixture.nativeElement.querySelectorAll(
      'app-subscription-card'
    );
    expect(subscriptionCards.length).toBe(component.subscriptionData.length);

    for (let i = 0; i < component.subscriptionData.length; i++) {
      const subscriptionCard = subscriptionCards[i];
      const subscription = component.subscriptionData[i];

      const titleElement = subscriptionCard.querySelector('.title-text');
      expect(titleElement.textContent).toContain(subscription.title);
    }
  });
});
