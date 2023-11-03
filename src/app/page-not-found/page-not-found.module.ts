import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [SvgAssetsModule, AppRoutingModule, SharedModule],
})
export class PageNotFoundModule {}
