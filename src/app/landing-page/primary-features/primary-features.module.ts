import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesDesktopComponent } from './features-desktop/features-desktop.component';
import { FeaturesMobileComponent } from './features-mobile/features-mobile.component';
import { PhoneContentInvestComponent } from './phone-content/phone-content-invest/phone-content-invest.component';
import { PhoneContentInviteComponent } from './phone-content/phone-content-invite/phone-content-invite.component';
import { PhoneContentStocksComponent } from './phone-content/phone-content-stocks/phone-content-stocks.component';
import { PrimaryFeaturesComponent } from './primary-features.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FeaturesDesktopComponent,
    FeaturesMobileComponent,
    PhoneContentInvestComponent,
    PhoneContentInviteComponent,
    PhoneContentStocksComponent,
    PrimaryFeaturesComponent,
  ],
  imports: [CommonModule, SvgAssetsModule, SharedModule],
  exports: [PrimaryFeaturesComponent],
})
export class PrimaryFeaturesModule {}
