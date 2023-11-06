import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneContentInvestComponent } from './phone-content-invest.component';
import { SvgGrowComponent } from 'src/assets/svg/svg-grow/svg-grow.component';

describe('PhoneContentInvestComponent', () => {
  let fixture: ComponentFixture<PhoneContentInvestComponent>;
  let component: PhoneContentInvestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneContentInvestComponent, SvgGrowComponent],
    });

    fixture = TestBed.createComponent(PhoneContentInvestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the PhoneContentInvestComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the description header', () => {
    const header = fixture.nativeElement.querySelector('.description-header');
    expect(header.textContent).toContain('Buy €LA');
  });

  it('should render the share price', () => {
    const sharePrice = fixture.nativeElement.querySelector(
      '.description p span'
    );
    expect(sharePrice.textContent).toContain('€34.28');
  });

  it('should render investment details', () => {
    const itemContents =
      fixture.nativeElement.querySelectorAll('.item-content span');
    expect(itemContents[0].textContent).toContain('100');
    expect(itemContents[1].textContent).toContain('€34.28');
    expect(itemContents[2].textContent).toContain('€3,428.00');
  });

  it('should render a button to buy shares', () => {
    const buyButton = fixture.nativeElement.querySelector('.button');
    expect(buyButton.textContent).toContain('Buy shares');
  });
});
