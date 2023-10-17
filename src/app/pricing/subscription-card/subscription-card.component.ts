import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
})
export class SubscriptionCardComponent {
  @Input() colorMode: string = 'bright';
  @Input() subscriptionData: any;
  @Input() logoFill: string = 'rgb(212,212,212)';
  @Input() activeOption: string = 'monthly';
}
