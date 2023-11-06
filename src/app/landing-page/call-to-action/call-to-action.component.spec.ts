import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { CallToActionComponent } from './call-to-action.component';
import { By } from '@angular/platform-browser';
import { SvgSpinnerBigComponent } from 'src/assets/svg/svg-spinner-big/svg-spinner-big.component';
import { SvgAppStoreComponent } from 'src/assets/svg/svg-app-store/svg-app-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CallToActionComponent', () => {
  let fixture: ComponentFixture<CallToActionComponent>;
  let component: CallToActionComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CallToActionComponent,
        SvgSpinnerBigComponent,
        SvgAppStoreComponent,
      ],
      imports: [BrowserAnimationsModule],
    });

    fixture = TestBed.createComponent(CallToActionComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the CallToActionComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a section element with the background and layout', () => {
    const sectionElement = htmlElement.querySelector('section');
    expect(sectionElement).toBeTruthy();
  });

  it('should have a SvgSpinnerBigComponent', () => {
    const spinnerBigComponent = fixture.debugElement.query(
      By.directive(SvgSpinnerBigComponent)
    );
    expect(spinnerBigComponent).toBeTruthy();
  });

  it('should have a SvgAppStoreComponent', () => {
    const spinnerBigComponent = fixture.debugElement.query(
      By.directive(SvgAppStoreComponent)
    );
    expect(spinnerBigComponent).toBeTruthy();
  });

  it('should display the heading and description', () => {
    const headingElement = htmlElement.querySelector('h2');
    const descriptionElement = htmlElement.querySelector('p');
    expect(headingElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    if (headingElement) {
      expect(headingElement.textContent).toBe('Get your first tips today');
    }
    if (descriptionElement) {
      expect(descriptionElement.textContent).toContain(
        'It takes 30 seconds to sign up. Download the app and create an account today and we’ll send you a tip guaranteed to double your first investment.'
      );
    }
  });

  it('should have a link to the routerLink for the app store', () => {
    const appStoreLink = fixture.debugElement.query(By.css('.app-store a'));
    expect(appStoreLink).toBeTruthy();
    expect(appStoreLink.attributes['routerLink']).toBe('/');
  });
});
