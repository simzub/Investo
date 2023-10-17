import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [
    trigger('optionState', [
      state(
        'active',
        style({ backgroundColor: 'rgb(168 85 247)', color: 'white' })
      ),
      state(
        'inactive',
        style({ backgroundColor: 'transparent', color: 'rgb(64 64 64)' })
      ),
      transition('inactive <=> active', animate('0.3s')),
    ]),
  ],
})
export class PricingComponent {
  subscriptionData = [
    {
      title: 'Starter',
      monthlyPrice: '$0',
      annuallyPrice: '$0',
      linkText: 'Get started for free',
      description:
        'You’re new to investing but want to do it right. Get started for free.',
      features: [
        'Commission-free trading',
        'Multi-layered encryption',
        'One tip every day',
        'Invest up to $1,500 each month',
      ],
    },
    {
      title: 'Investor',
      monthlyPrice: '$7',
      annuallyPrice: '$70',
      linkText: 'Subscribe',
      description:
        'You’ve been investing for a while. Invest more and grow your wealth faster.',
      features: [
        'Commission-free trading',
        'Multi-layered encryption',
        'One tip every hour',
        'Invest up to $15,000 each month',
        'Basic transaction anonymization',
      ],
    },
    {
      title: 'VIP',
      monthlyPrice: '$199',
      annuallyPrice: '$1190',
      linkText: 'Subscribe',
      description:
        'You’ve got a huge amount of assets but it’s not enough. To the moon.',
      features: [
        'Commission-free trading',
        'Multi-layered encryption',
        'Real-time tip notifications',
        'No investment limits',
        'Advanced transaction anonymization',
        'Automated tax-loss harvesting',
      ],
    },
  ];

  activeOption = 'monthly';

  setActiveOption(option: string) {
    this.activeOption = option;
  }
}
