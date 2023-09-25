import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-svg-spinner-small',
  templateUrl: './svg-spinner-small.component.html',
  styleUrls: ['./svg-spinner-small.component.scss'],
  animations: [
    trigger('spinSlow', [
      transition('in => out', [
        style({ transform: 'rotate(0deg)' }),
        animate('6s linear', style({ transform: 'rotate(-360deg)' })),
      ]),
    ]),
  ],
})
export class SvgSpinnerSmallComponent {
  state = 'in';
  onEnd(event: any) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
}
