import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-features',
  templateUrl: './secondary-features.component.html',
  styleUrls: ['./secondary-features.component.scss'],
})
export class SecondaryFeaturesComponent {
  features = [
    {
      name: 'Invest any amount',
      description:
        'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
      icon: 'arrow',
    },
    {
      name: 'Build a balanced portfolio',
      description:
        'Invest in different industries to find the most opportunities to win huge.',
      icon: 'cards',
    },
    {
      name: 'Trade in real-time',
      description:
        'Get insider tips on big stock moves and act on them within seconds.',
      icon: 'clock',
    },
    {
      name: 'Profit from your network',
      description:
        'Invite new insiders to get tips faster and beat even other Investo users.',
      icon: 'list',
    },
    {
      name: 'Encrypted and anonymized',
      description:
        'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
      icon: 'lock',
    },
    {
      name: 'Portfolio tracking',
      description:
        'Watch your investments grow exponentially, leaving other investors in the dust.',
      icon: 'chart',
    },
  ];
}
