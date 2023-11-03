import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [SvgAssetsModule, AppRoutingModule, SharedModule],
})
export class LoginModule {}
