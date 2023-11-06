import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroductionComponent } from './introduction.component';
import { SvgAppStoreComponent } from 'src/assets/svg/svg-app-store/svg-app-store.component';
import { SvgPlayComponent } from 'src/assets/svg/svg-play/svg-play.component';
import { SvgSpinnerBigComponent } from 'src/assets/svg/svg-spinner-big/svg-spinner-big.component';
import { SvgSpinnerSmallComponent } from 'src/assets/svg/svg-spinner-small/svg-spinner-small.component';
import { PhoneFrameComponent } from 'src/app/shared/phone-frame/phone-frame.component';
import { SvgPlusComponent } from 'src/assets/svg/svg-plus/svg-plus.component';
import { SvgGraphComponent } from 'src/assets/svg/svg-graph/svg-graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgMenuClosedComponent } from 'src/assets/svg/svg-menu-closed/svg-menu-closed.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgProfileLogoComponent } from 'src/assets/svg/svg-profile-logo/svg-profile-logo.component';
import { SvgPhoneBorderComponent } from 'src/assets/svg/svg-phone-border/svg-phone-border.component';

describe('IntroductionComponent', () => {
  let fixture: ComponentFixture<IntroductionComponent>;
  let component: IntroductionComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IntroductionComponent,
        SvgAppStoreComponent,
        SvgPlayComponent,
        SvgSpinnerBigComponent,
        SvgSpinnerSmallComponent,
        PhoneFrameComponent,
        SvgPlusComponent,
        SvgGraphComponent,
        SvgMenuClosedComponent,
        SvgLogoComponent,
        SvgProfileLogoComponent,
        SvgPhoneBorderComponent,
      ],
      imports: [BrowserAnimationsModule],
    });

    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the IntroductionComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleElement = fixture.nativeElement.querySelector('.intro-title');
    expect(titleElement.textContent).toContain('Invest at the perfect time.');
  });

  it('should display the description', () => {
    const descriptionElement =
      fixture.nativeElement.querySelector('.intro-description');
    expect(descriptionElement.textContent).toContain(
      'By leveraging insights from our network of industry insiders'
    );
  });
});
