import { NgModule } from '@angular/core';
import { SvgAssetsModule } from 'src/assets/svg/svg-assets.module';
import { SharedModule } from '../shared/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { SecondaryFeaturesComponent } from './secondary-features/secondary-features.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { LandingPageComponent } from './landing-page.component';
import { FaqsModule } from './faqs/faqs.module';
import { PricingModule } from './pricing/pricing.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PrimaryFeaturesModule } from './primary-features/primary-features.module';

@NgModule({
  declarations: [
    IntroductionComponent,
    SecondaryFeaturesComponent,
    CallToActionComponent,
    LandingPageComponent,
  ],
  imports: [
    SvgAssetsModule,
    SharedModule,
    FaqsModule,
    PricingModule,
    ReviewsModule,
    PrimaryFeaturesModule,
  ],
})
export class LandingPageModule {}
