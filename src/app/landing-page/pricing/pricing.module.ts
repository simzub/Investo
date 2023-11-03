import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubscriptionCardComponent } from './subscription-card/subscription-card.component';
import { PricingComponent } from './pricing.component';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';

@NgModule({
  declarations: [SubscriptionCardComponent, PricingComponent],
  imports: [CommonModule, SvgAssetsModule],
  exports: [PricingComponent],
})
export class PricingModule {}
