import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SvgAssetsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
})
export class LoginModule {}
