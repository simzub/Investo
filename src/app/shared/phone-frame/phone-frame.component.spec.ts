import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { PhoneFrameComponent } from './phone-frame.component';
import { By } from '@angular/platform-browser';
import { SvgMenuClosedComponent } from 'src/assets/svg/svg-menu-closed/svg-menu-closed.component';
import { SvgProfileLogoComponent } from 'src/assets/svg/svg-profile-logo/svg-profile-logo.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgPhoneBorderComponent } from 'src/assets/svg/svg-phone-border/svg-phone-border.component';

describe('PhoneFrameComponent', () => {
  let fixture: ComponentFixture<PhoneFrameComponent>;
  let component: PhoneFrameComponent;
  let htmlElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneFrameComponent,
        SvgMenuClosedComponent,
        SvgProfileLogoComponent,
        SvgLogoComponent,
        SvgPhoneBorderComponent,
      ],
    });

    fixture = TestBed.createComponent(PhoneFrameComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.nativeElement;
  });

  it('should create the PhoneFrameComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container', () => {
    const container = htmlElement.querySelector('.container');
    expect(container).toBeTruthy();
  });

  it('should have an SvgMenuClosedComponent component', () => {
    const svg = fixture.debugElement.query(
      By.directive(SvgMenuClosedComponent)
    );
    expect(svg).toBeTruthy();
  });

  it('should have an SvgLogoComponent component', () => {
    const svg = fixture.debugElement.query(By.directive(SvgLogoComponent));
    expect(svg).toBeTruthy();
  });

  it('should have an SvgProfileLogoComponent component', () => {
    const svg = fixture.debugElement.query(
      By.directive(SvgProfileLogoComponent)
    );
    expect(svg).toBeTruthy();
  });

  it('should have an SvgPhoneBorderComponent component', () => {
    const svg = fixture.debugElement.query(
      By.directive(SvgPhoneBorderComponent)
    );
    expect(svg).toBeTruthy();
  });
});
