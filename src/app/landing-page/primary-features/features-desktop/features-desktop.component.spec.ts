import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesDesktopComponent } from './features-desktop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgDeviceUserComponent } from 'src/assets/svg/device/svg-device-user/svg-device-user.component';
import { SvgDeviceNotificationComponent } from 'src/assets/svg/device/svg-device-notification/svg-device-notification.component';
import { SvgDeviceTouchComponent } from 'src/assets/svg/device/svg-device-touch/svg-device-touch.component';
import { SvgSpinnerBigComponent } from 'src/assets/svg/svg-spinner-big/svg-spinner-big.component';
import { PhoneFrameComponent } from 'src/app/shared/phone-frame/phone-frame.component';
import { SvgMenuClosedComponent } from 'src/assets/svg/svg-menu-closed/svg-menu-closed.component';
import { SvgLogoComponent } from 'src/assets/svg/svg-logo/svg-logo.component';
import { SvgProfileLogoComponent } from 'src/assets/svg/svg-profile-logo/svg-profile-logo.component';
import { SvgPhoneBorderComponent } from 'src/assets/svg/svg-phone-border/svg-phone-border.component';
import { PhoneContentInviteComponent } from '../phone-content/phone-content-invite/phone-content-invite.component';
import { PhoneContentStocksComponent } from '../phone-content/phone-content-stocks/phone-content-stocks.component';
import { SvgLaravelComponent } from 'src/assets/svg/stocks/svg-laravel/svg-laravel.component';
import { SvgTupleComponent } from 'src/assets/svg/stocks/svg-tuple/svg-tuple.component';
import { SvgTransistorComponent } from 'src/assets/svg/stocks/svg-transistor/svg-transistor.component';
import { SvgDiageoComponent } from 'src/assets/svg/stocks/svg-diageo/svg-diageo.component';
import { SvgStatickitComponent } from 'src/assets/svg/stocks/svg-statickit/svg-statickit.component';
import { SvgStatamicComponent } from 'src/assets/svg/stocks/svg-statamic/svg-statamic.component';
import { SvgMirageComponent } from 'src/assets/svg/stocks/svg-mirage/svg-mirage.component';
import { SvgReversableComponent } from 'src/assets/svg/stocks/svg-reversable/svg-reversable.component';
import { PhoneContentInvestComponent } from '../phone-content/phone-content-invest/phone-content-invest.component';
import { SvgGrowComponent } from 'src/assets/svg/svg-grow/svg-grow.component';

describe('FeaturesDesktopComponent', () => {
  let fixture: ComponentFixture<FeaturesDesktopComponent>;
  let component: FeaturesDesktopComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeaturesDesktopComponent,
        SvgDeviceUserComponent,
        SvgDeviceNotificationComponent,
        SvgDeviceTouchComponent,
        SvgSpinnerBigComponent,
        PhoneFrameComponent,
        SvgMenuClosedComponent,
        SvgLogoComponent,
        SvgProfileLogoComponent,
        SvgPhoneBorderComponent,
        PhoneContentInviteComponent,
        PhoneContentStocksComponent,
        SvgLaravelComponent,
        SvgTupleComponent,
        SvgTransistorComponent,
        SvgDiageoComponent,
        SvgStatickitComponent,
        SvgStatamicComponent,
        SvgMirageComponent,
        SvgReversableComponent,
        PhoneContentInvestComponent,
        SvgGrowComponent,
      ],
      imports: [BrowserAnimationsModule],
    });

    fixture = TestBed.createComponent(FeaturesDesktopComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the FeaturesDesktopComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render feature descriptions', () => {
    const descriptions =
      fixture.nativeElement.querySelectorAll('.description-item');
    expect(descriptions.length).toBe(3);

    const featureTitles = fixture.nativeElement.querySelectorAll(
      '.description-item h3'
    );
    expect(featureTitles.length).toBe(3);

    const featureDescriptions = fixture.nativeElement.querySelectorAll(
      '.description-item p'
    );
    expect(featureDescriptions.length).toBe(3);
  });

  it('should handle click event and change active feature', () => {
    const descriptions =
      fixture.nativeElement.querySelectorAll('.description-item');

    descriptions[1].click();
    fixture.detectChanges();

    expect(component.activeIndex).toBe(1);

    descriptions[2].click();
    fixture.detectChanges();

    expect(component.activeIndex).toBe(2);
  });
});
