import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SvgAssetsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
  ],
})
export class RegisterModule {}
