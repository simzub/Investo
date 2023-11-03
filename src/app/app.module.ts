import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { SharedModule } from './shared/shared.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SvgAssetsModule,
    SharedModule,
    RegisterModule,
    LoginModule,
    PageNotFoundModule,
    LandingPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
