import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-svg-spinner-big',
  templateUrl: './svg-spinner-big.component.html',
  styleUrls: ['./svg-spinner-big.component.scss'],
  animations: [
    trigger('spinSlow', [
      transition('in => out', [
        style({ transform: 'rotate(0deg)' }),
        animate('4s linear', style({ transform: 'rotate(360deg)' })),
      ]),
    ]),
  ],
})
export class SvgSpinnerBigComponent {
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
