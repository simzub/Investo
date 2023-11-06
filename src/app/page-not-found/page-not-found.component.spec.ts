import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SvgSpinnerStaticComponent } from 'src/assets/svg/svg-spinner-static/svg-spinner-static.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgQrFrameComponent } from 'src/assets/svg/svg-qr-frame/svg-qr-frame.component';

describe('PageNotFoundComponent', () => {
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let component: PageNotFoundComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent,
        SvgSpinnerStaticComponent,
        SvgLogoComponent,
        SvgQrFrameComponent,
      ],
    });

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the PageNotFoundComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container element', () => {
    const containerElement = htmlElement.querySelector('.container');
    expect(containerElement).toBeTruthy();
  });

  it('should have an HeaderComponent', () => {
    const headerComponent = fixture.debugElement.query(
      By.directive(HeaderComponent)
    );
    expect(headerComponent).toBeTruthy();
  });

  it('should have a SvgSpinnerStaticComponent', () => {
    const spinnerStaticComponent = fixture.debugElement.query(
      By.directive(SvgSpinnerStaticComponent)
    );
    expect(spinnerStaticComponent).toBeTruthy();
  });

  it('should display a 404 error code', () => {
    const errorCodeElement = htmlElement.querySelector('.error-code');
    expect(errorCodeElement).toBeTruthy();
    if (errorCodeElement) {
      expect(errorCodeElement.textContent).toContain('404');
    }
  });

  it('should display the error title', () => {
    const errorTitleElement = htmlElement.querySelector('.error-title');
    expect(errorTitleElement).toBeTruthy();
    if (errorTitleElement) {
      expect(errorTitleElement.textContent).toContain('Page not found');
    }
  });

  it('should display the error message', () => {
    const errorMessageElement = htmlElement.querySelector('.error-message');
    expect(errorMessageElement).toBeTruthy();
    if (errorMessageElement) {
      expect(errorMessageElement.textContent).toContain(
        'Sorry, we couldn’t find the page you’re looking for.'
      );
    }
  });

  it('should have a "Go back home" link with a routerLink to the home page', () => {
    const homeLink = fixture.debugElement.query(By.css('.home-link'));
    expect(homeLink).toBeTruthy();
    expect(homeLink.attributes['routerLink']).toBe('/');
    expect(homeLink.nativeElement.textContent).toContain('Go back home');
  });

  it('should have a FooterComponent', () => {
    const footerComponent = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    expect(footerComponent).toBeTruthy();
  });
});
