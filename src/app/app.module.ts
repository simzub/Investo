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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgLogoComponent,
    SvgMenuOpenComponent,
    SvgMenuClosedComponent,
    SvgAppStoreComponent,
    SvgPlayComponent,
    IntroductionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
