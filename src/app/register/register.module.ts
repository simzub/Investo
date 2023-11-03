import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [SvgAssetsModule, AppRoutingModule, SharedModule],
})
export class RegisterModule {}
