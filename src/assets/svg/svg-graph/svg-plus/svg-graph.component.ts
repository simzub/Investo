import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-svg-graph',
  templateUrl: './svg-graph.component.html',
})
export class SvgGraphComponent {
  @ViewChild('svgElement') svgElement: ElementRef | undefined; // Initialize as undefined

  // Track mouse coordinates
  mouseX: number = 0;
  xValue: number[] = [
    16, 23.9375, 31.875, 39.8125, 47.75, 55.6875, 63.625, 71.5625, 79.5,
    87.4375, 95.375, 103.3125, 111.25, 119.1875, 127.125, 135.0625, 143,
    150.9375, 158.875, 166.8125, 174.75, 182.6875, 190.625, 198.5625, 206.5,
    214.4375, 222.375, 230.3125, 238.25, 246.1875, 254.125, 262.0625, 270,
  ];

  constructor() {
    // Initialize the property in the constructor
    this.svgElement = undefined;
  }

  updateMouseCoordinates(event: MouseEvent) {
    if (this.svgElement) {
      // Get the mouse X coordinate relative to the SVG element
      const svgRect = this.svgElement.nativeElement.getBoundingClientRect();
      this.mouseX = event.clientX - svgRect.left;
    }
  }

  // Listen for mousemove events on the SVG element
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.updateMouseCoordinates(event);

    // You can do something with the mouse coordinates here
    console.log(`Mouse X: ${this.mouseX}`);
  }
}
