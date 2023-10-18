import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-logo',
  templateUrl: './svg-logo.component.html',
})
export class SvgLogoComponent {
  @Input() size: 'big' | 'small' = 'big';
  @Input() fill: string = 'rgb(147 51 234)';

  getSVGWidth(): string {
    return this.size === 'big' ? '40' : '24';
  }

  getSVGHeight(): string {
    return this.size === 'big' ? '40' : '24';
  }
}
