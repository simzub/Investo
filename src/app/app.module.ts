import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SvgLogoComponent } from '../assets/svg/svg-logo/svg-logo.component';
import { SvgMenuOpenComponent } from 'src/assets/svg/svg-menu-open/svg-menu-open.component';
import { SvgMenuClosedComponent } from 'src/assets/svg/svg-menu-closed/svg-menu-closed.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SvgAppStoreComponent } from 'src/assets/svg/svg-app-store/svg-app-store.component';
import { SvgPlayComponent } from 'src/assets/svg/svg-play/svg-play.component';
import { SvgSpinnerBigComponent } from 'src/assets/svg/svg-spinner-big/svg-spinner-big.component';
import { SvgSpinnerSmallComponent } from 'src/assets/svg/svg-spinner-small/svg-spinner-small.component';
import { SvgPhoneBorderComponent } from 'src/assets/svg/svg-phone-border/svg-phone-border.component';
import { PhoneFrameComponent } from './shared/phone-frame/phone-frame.component';
import { SvgProfileLogoComponent } from 'src/assets/svg/svg-profile-logo/svg-profile-logo.component';
import { SvgPlusComponent } from 'src/assets/svg/svg-plus/svg-plus.component';
import { SvgGraphComponent } from 'src/assets/svg/svg-graph/svg-plus/svg-graph.component';
import { PrimaryFeaturesComponent } from './primary-features/primary-features.component';
import { FeaturesMobileComponent } from './primary-features/features-mobile/features-mobile.component';
import { FeaturesDesktopComponent } from './primary-features/features-desktop/features-desktop.component';

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
    IntroductionComponent,
    PhoneFrameComponent,
    PrimaryFeaturesComponent,
    FeaturesMobileComponent,
    FeaturesDesktopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
