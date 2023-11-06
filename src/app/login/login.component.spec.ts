import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { AuthFormComponent } from '../shared/auth-form/auth-form.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgSpinnerStaticComponent } from 'src/assets/svg/svg-spinner-static/svg-spinner-static.component';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        AuthFormComponent,
        SvgLogoComponent,
        SvgSpinnerStaticComponent,
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have an AuthFormComponent', () => {
    const authFormComponent = fixture.debugElement.query(
      By.directive(AuthFormComponent)
    );
    expect(authFormComponent).toBeTruthy();
  });

  it('should have form inputs for email and password', () => {
    const formInputs = fixture.debugElement.queryAll(By.css('.form-input'));
    expect(formInputs.length).toBe(2);
  });
});
