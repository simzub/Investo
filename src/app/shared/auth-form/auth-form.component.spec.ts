import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { AuthFormComponent } from './auth-form.component';
import { By } from '@angular/platform-browser';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgSpinnerStaticComponent } from 'src/assets/svg/svg-spinner-static/svg-spinner-static.component';

describe('AuthFormComponent', () => {
  let fixture: ComponentFixture<AuthFormComponent>;
  let component: AuthFormComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthFormComponent,
        SvgLogoComponent,
        SvgSpinnerStaticComponent,
      ],
    });

    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the AuthFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container element', () => {
    const containerElement = htmlElement.querySelector('.container');
    expect(containerElement).toBeTruthy();
  });

  it('should have a logo with a routerLink attribute', () => {
    const logoLink = fixture.debugElement.query(By.css('.logo'));
    expect(logoLink).toBeTruthy();
    expect(logoLink.attributes['routerLink']).toBe('/');
  });

  it('should have a SvgSpinnerStaticComponent component', () => {
    const spinnerStatic = fixture.debugElement.query(
      By.directive(SvgSpinnerStaticComponent)
    );
    expect(spinnerStatic).toBeTruthy();
  });

  it('should have a description with correct text and a link', () => {
    const descriptionElement = fixture.debugElement.query(By.css('.info'));
    expect(descriptionElement).toBeTruthy();
    const linkElement = descriptionElement.query(By.css('a.link'));
    expect(linkElement).toBeTruthy();
    expect(linkElement.nativeElement.textContent).toBe(component.link);
  });

  it('should have a form with a submit button and the correct text', () => {
    const formElement = fixture.debugElement.query(By.css('form'));
    expect(formElement).toBeTruthy();
    const submitButton = formElement.query(By.css('.submit-button'));
    expect(submitButton).toBeTruthy();
    expect(submitButton.nativeElement.textContent).toBe(component.submitText);
  });
});
