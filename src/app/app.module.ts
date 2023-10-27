import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SvgLogoComponent } from '../assets/svg/svg-logo/svg-logo.component';
import { SvgMenuOpenComponent } from 'src/assets/svg/svg-menu-open/svg-menu-open.component';
import { SvgMenuClosedComponent } from 'src/assets/svg/svg-menu-closed/svg-menu-closed.component';
import { IntroductionComponent } from './landing-page/introduction/introduction.component';
import { SvgAppStoreComponent } from 'src/assets/svg/svg-app-store/svg-app-store.component';
import { SvgPlayComponent } from 'src/assets/svg/svg-play/svg-play.component';
import { SvgSpinnerBigComponent } from 'src/assets/svg/svg-spinner-big/svg-spinner-big.component';
import { SvgSpinnerSmallComponent } from 'src/assets/svg/svg-spinner-small/svg-spinner-small.component';
import { SvgPhoneBorderComponent } from 'src/assets/svg/svg-phone-border/svg-phone-border.component';
import { PhoneFrameComponent } from './shared/phone-frame/phone-frame.component';
import { SvgProfileLogoComponent } from 'src/assets/svg/svg-profile-logo/svg-profile-logo.component';
import { SvgPlusComponent } from 'src/assets/svg/svg-plus/svg-plus.component';
import { PrimaryFeaturesComponent } from './landing-page/primary-features/primary-features.component';
import { SvgDeviceNotificationComponent } from 'src/assets/svg/device/svg-device-notification/svg-device-notification.component';
import { SvgDeviceTouchComponent } from 'src/assets/svg/device/svg-device-touch/svg-device-touch.component';
import { SvgDeviceUserComponent } from 'src/assets/svg/device/svg-device-user/svg-device-user.component';
import { PhoneContentInviteComponent } from './landing-page/primary-features/phone-content/phone-content-invite/phone-content-invite.component';
import { PhoneContentStocksComponent } from './landing-page/primary-features/phone-content/phone-content-stocks/phone-content-stocks.component';
import { PhoneContentInvestComponent } from './landing-page/primary-features/phone-content/phone-content-invest/phone-content-invest.component';
import { SvgGrowComponent } from 'src/assets/svg/svg-grow/svg-grow.component';
import { SvgLaravelComponent } from 'src/assets/svg/stocks/svg-laravel/svg-laravel.component';
import { SvgTupleComponent } from 'src/assets/svg/stocks/svg-tuple/svg-tuple.component';
import { SvgTransistorComponent } from 'src/assets/svg/stocks/svg-transistor/svg-transistor.component';
import { SvgDiageoComponent } from 'src/assets/svg/stocks/svg-diageo/svg-diageo.component';
import { SvgStatickitComponent } from 'src/assets/svg/stocks/svg-statickit/svg-statickit.component';
import { SvgStatamicComponent } from 'src/assets/svg/stocks/svg-statamic/svg-statamic.component';
import { SvgMirageComponent } from 'src/assets/svg/stocks/svg-mirage/svg-mirage.component';
import { SvgReversableComponent } from 'src/assets/svg/stocks/svg-reversable/svg-reversable.component';
import { SvgGraphComponent } from 'src/assets/svg/svg-graph/svg-graph.component';
import { SecondaryFeaturesComponent } from './landing-page/secondary-features/secondary-features.component';
import { SvgDeviceArrowComponent } from 'src/assets/svg/device/svg-device-arrow/svg-device-arrow.component';
import { SvgDeviceCardsComponent } from 'src/assets/svg/device/svg-device-cards/svg-device-cards.component';
import { SvgDeviceChartComponent } from 'src/assets/svg/device/svg-device-chart/svg-device-chart.component';
import { SvgDeviceClockComponent } from 'src/assets/svg/device/svg-device-clock/svg-device-clock.component';
import { SvgDeviceListComponent } from 'src/assets/svg/device/svg-device-list/svg-device-list.component';
import { SvgDeviceLockComponent } from 'src/assets/svg/device/svg-device-lock/svg-device-lock.component';
import { ReviewsComponent } from './landing-page/reviews/reviews.component';
import { SvgStarComponent } from 'src/assets/svg/svg-star/svg-star.component';
import { ReviewsColumnComponent } from './landing-page/reviews/reviews-column/reviews-column.component';
import { PricingComponent } from './landing-page/pricing/pricing.component';
import { SubscriptionCardComponent } from './landing-page/pricing/subscription-card/subscription-card.component';
import { SvgCheckComponent } from 'src/assets/svg/svg-check/svg-check.component';
import { FaqsComponent } from './landing-page/faqs/faqs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SvgQrFrameComponent } from 'src/assets/svg/svg-qr-frame/svg-qr-frame.component';
import { FaqsListComponent } from './landing-page/faqs/faqs-list/faqs-list.component';
import { AuthFormComponent } from './shared/auth-form/auth-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CallToActionComponent } from './landing-page/call-to-action/call-to-action.component';
import { FeaturesMobileComponent } from './landing-page/primary-features/features-mobile/features-mobile.component';
import { FeaturesDesktopComponent } from './landing-page/primary-features/features-desktop/features-desktop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SvgSpinnerStaticComponent } from 'src/assets/svg/svg-spinner-static/svg-spinner-static.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgLogoComponent,
    SvgMenuOpenComponent,
    SvgMenuClosedComponent,
    SvgAppStoreComponent,
    SvgPlayComponent,
    SvgSpinnerBigComponent,
    SvgSpinnerSmallComponent,
    SvgPhoneBorderComponent,
    SvgProfileLogoComponent,
    SvgPlusComponent,
    SvgGraphComponent,
    SvgDeviceNotificationComponent,
    SvgDeviceTouchComponent,
    SvgDeviceUserComponent,
    SvgGrowComponent,
    SvgLaravelComponent,
    SvgTupleComponent,
    SvgTransistorComponent,
    SvgDiageoComponent,
    SvgStatickitComponent,
    SvgStatamicComponent,
    SvgMirageComponent,
    SvgReversableComponent,
    SvgDeviceArrowComponent,
    SvgDeviceCardsComponent,
    SvgDeviceChartComponent,
    SvgDeviceClockComponent,
    SvgDeviceListComponent,
    SvgQrFrameComponent,
    SvgDeviceLockComponent,
    SvgCheckComponent,
    SvgStarComponent,
    SvgSpinnerStaticComponent,
    IntroductionComponent,
    PhoneFrameComponent,
    PrimaryFeaturesComponent,
    FeaturesMobileComponent,
    FeaturesDesktopComponent,
    PhoneContentInviteComponent,
    PhoneContentStocksComponent,
    PhoneContentInvestComponent,
    SecondaryFeaturesComponent,
    CallToActionComponent,
    ReviewsComponent,
    ReviewsColumnComponent,
    PricingComponent,
    SubscriptionCardComponent,
    FaqsComponent,
    FooterComponent,
    FaqsListComponent,
    AuthFormComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
