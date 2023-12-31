import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PhoneFrameComponent } from './phone-frame/phone-frame.component';
import { FooterComponent } from './footer/footer.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    PhoneFrameComponent,
    FooterComponent,
    AuthFormComponent,
  ],
  imports: [CommonModule, SvgAssetsModule, RouterModule],
  exports: [
    HeaderComponent,
    PhoneFrameComponent,
    FooterComponent,
    AuthFormComponent,
    CommonModule,
  ],
})
export class SharedModule {}
