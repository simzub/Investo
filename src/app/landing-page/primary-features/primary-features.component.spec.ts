import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryFeaturesComponent } from './primary-features.component';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesMobileComponent } from './features-mobile/features-mobile.component';
import { FeaturesDesktopComponent } from './features-desktop/features-desktop.component';
import { SvgSpinnerBigComponent } from 'src/assets/svg/svg-spinner-big/svg-spinner-big.component';
import { PhoneFrameComponent } from 'src/app/shared/phone-frame/phone-frame.component';
import { PhoneContentInviteComponent } from './phone-content/phone-content-invite/phone-content-invite.component';
import { SvgDeviceUserComponent } from 'src/assets/svg/device/svg-device-user/svg-device-user.component';
import { PhoneContentStocksComponent } from './phone-content/phone-content-stocks/phone-content-stocks.component';
import { SvgDeviceNotificationComponent } from 'src/assets/svg/device/svg-device-notification/svg-device-notification.component';
import { PhoneContentInvestComponent } from './phone-content/phone-content-invest/phone-content-invest.component';
import { SvgDeviceTouchComponent } from 'src/assets/svg/device/svg-device-touch/svg-device-touch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgMenuClosedComponent } from 'src/assets/svg/svg-menu-closed/svg-menu-closed.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgProfileLogoComponent } from 'src/assets/svg/svg-profile-logo/svg-profile-logo.component';
import { SvgPhoneBorderComponent } from 'src/assets/svg/svg-phone-border/svg-phone-border.component';
import { SvgGrowComponent } from 'src/assets/svg/svg-grow/svg-grow.component';
import { SvgLaravelComponent } from 'src/assets/svg/stocks/svg-laravel/svg-laravel.component';
import { SvgTupleComponent } from 'src/assets/svg/stocks/svg-tuple/svg-tuple.component';
import { SvgTransistorComponent } from 'src/assets/svg/stocks/svg-transistor/svg-transistor.component';
import { SvgDiageoComponent } from 'src/assets/svg/stocks/svg-diageo/svg-diageo.component';
import { SvgStatickitComponent } from 'src/assets/svg/stocks/svg-statickit/svg-statickit.component';
import { SvgStatamicComponent } from 'src/assets/svg/stocks/svg-statamic/svg-statamic.component';
import { SvgMirageComponent } from 'src/assets/svg/stocks/svg-mirage/svg-mirage.component';
import { SvgReversableComponent } from 'src/assets/svg/stocks/svg-reversable/svg-reversable.component';

describe('PrimaryFeaturesComponent', () => {
  let component: PrimaryFeaturesComponent;
  let fixture: ComponentFixture<PrimaryFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PrimaryFeaturesComponent,
        FeaturesMobileComponent,
        FeaturesDesktopComponent,
        SvgSpinnerBigComponent,
        PhoneFrameComponent,
        PhoneContentInviteComponent,
        SvgDeviceUserComponent,
        PhoneContentStocksComponent,
        SvgDeviceNotificationComponent,
        PhoneContentInvestComponent,
        SvgDeviceTouchComponent,
        SvgMenuClosedComponent,
        SvgLogoComponent,
        SvgProfileLogoComponent,
        SvgPhoneBorderComponent,
        SvgGrowComponent,
        SvgLaravelComponent,
        SvgTupleComponent,
        SvgTransistorComponent,
        SvgDiageoComponent,
        SvgStatickitComponent,
        SvgStatamicComponent,
        SvgMirageComponent,
        SvgReversableComponent,
      ],
      imports: [BrowserModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render features section', () => {
    const featuresSection = fixture.nativeElement.querySelector('#features');
    const featuresText = fixture.nativeElement.querySelector('.features-text');
    const h2Element = featuresText.querySelector('h2');
    const pElement = featuresText.querySelector('p');
    const featuresMobile =
      fixture.nativeElement.querySelector('.features-mobile');
    const featuresDesktop =
      fixture.nativeElement.querySelector('.features-desktop');

    expect(featuresSection).toBeTruthy();
    expect(featuresText).toBeTruthy();
    expect(h2Element.textContent).toContain(
      'Every feature you need to win. Try it for yourself.'
    );
    expect(pElement.textContent).toContain(
      'Investo was built for investors like you who play by their own rules and aren’t going to let SEC regulations get in the way of their dreams. If other investing tools are afraid to build it, Investo has it.'
    );
    expect(featuresMobile).toBeTruthy();
    expect(featuresDesktop).toBeTruthy();
  });
});
