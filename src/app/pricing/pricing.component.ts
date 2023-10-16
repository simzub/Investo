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
  activeOption = 'monthly';

  setActiveOption(option: string) {
    this.activeOption = option;
  }
}
