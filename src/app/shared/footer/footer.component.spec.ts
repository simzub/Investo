import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgQrFrameComponent } from 'src/assets/svg/svg-qr-frame/svg-qr-frame.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, SvgLogoComponent, SvgQrFrameComponent],
    });

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the FooterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a footer element', () => {
    const footerElement = htmlElement.querySelector('footer');
    expect(footerElement).toBeTruthy();
  });

  it('should have an SvgLogoComponent component', () => {
    const svg = fixture.debugElement.query(By.directive(SvgLogoComponent));
    expect(svg).toBeTruthy();
  });

  function testNavLinkWithFragment(fragment: string, expectedText: string) {
    return it(`should have a nav-link with correct routerLink and fragment for ${expectedText}`, () => {
      const navLink = fixture.debugElement.query(
        By.css(`.nav-link[fragment="${fragment}"] span.nav-text`)
      );
      expect(navLink).toBeTruthy();
      expect(navLink.nativeElement.textContent).toContain(expectedText);
    });
  }
  testNavLinkWithFragment('features', 'Features');
  testNavLinkWithFragment('reviews', 'Reviews');
  testNavLinkWithFragment('pricing', 'Pricing');
  testNavLinkWithFragment('faqs', 'FAQs');

  it('should have a download section with a QR code', () => {
    const downloadSection = fixture.debugElement.query(
      By.css('.download-section')
    );
    expect(downloadSection).toBeTruthy();

    const qrFrame = fixture.debugElement.query(
      By.css('.download-logo app-svg-qr-frame')
    );
    expect(qrFrame).toBeTruthy();

    const qrCodeImage = downloadSection.query(
      By.css('img[src*="qr-code.svg"]')
    );
    expect(qrCodeImage).toBeTruthy();
  });

  it('should have a newsletter form', () => {
    const newsletterForm = fixture.debugElement.query(By.css('form'));
    expect(newsletterForm).toBeTruthy();
  });
});
