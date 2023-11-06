import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';
import { AuthFormComponent } from '../shared/auth-form/auth-form.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgSpinnerStaticComponent } from 'src/assets/svg/svg-spinner-static/svg-spinner-static.component';

describe('RegisterComponent', () => {
  let fixture: ComponentFixture<RegisterComponent>;
  let component: RegisterComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent,
        AuthFormComponent,
        SvgLogoComponent,
        SvgSpinnerStaticComponent,
      ],
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the RegisterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have an AuthFormComponent', () => {
    const authFormComponent = fixture.debugElement.query(
      By.directive(AuthFormComponent)
    );
    expect(authFormComponent).toBeTruthy();
  });

  it('should have form inputs for first name, last name, email, and password', () => {
    const formInputs = fixture.debugElement.queryAll(By.css('.form-input'));
    expect(formInputs.length).toBe(5);
  });

  it('should have a select element for "How did you hear about us?"', () => {
    const selectElement = fixture.debugElement.query(
      By.css('select.form-input')
    );
    expect(selectElement).toBeTruthy();
    const optionElements = selectElement.queryAll(By.css('option'));
    expect(optionElements.length).toBe(4);
  });
});
