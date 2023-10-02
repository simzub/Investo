import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-features-desktop',
  templateUrl: './features-desktop.component.html',
  styleUrls: ['./features-desktop.component.scss'],
  animations: [
    trigger('itemAnimation', [
      state(
        'active',
        style({
          backgroundColor: 'rgba(64, 64, 64, 0.5)',
        })
      ),
      transition('inactive <=> active', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class FeaturesDesktopComponent {
  activeIndex: number = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
