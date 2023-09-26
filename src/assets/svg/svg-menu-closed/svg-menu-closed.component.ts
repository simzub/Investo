import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-menu-closed',
  templateUrl: './svg-menu-closed.component.html',
})
export class SvgMenuClosedComponent {
  @Input() stroke: string = '#000';
}
