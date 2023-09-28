import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-svg-graph',
  templateUrl: './svg-graph.component.html',
})
export class SvgGraphComponent {
  @ViewChild('svgElement') svgElement: ElementRef | undefined;
  @Output() hoverChange = new EventEmitter<{
    isHovering: boolean;
    objectId: number;
  }>();

  isHovering: boolean = false;
  data = [
    { id: 0, x: 16, y: 32 },
    { id: 1, x: 23.9375, y: 47.470930232558125 },
    { id: 2, x: 31.875, y: 39.35755813953487 },
    { id: 3, x: 39.8125, y: 80.01162790697674 },
    { id: 4, x: 47.75, y: 63.62790697674417 },
    { id: 5, x: 55.6875, y: 79.31395348837209 },
    { id: 6, x: 63.625, y: 87.81395348837209 },
    { id: 7, x: 71.5625, y: 98.91279069767441 },
    { id: 8, x: 79.5, y: 71.63662790697671 },
    { id: 9, x: 87.4375, y: 127.33720930232556 },
    { id: 10, x: 95.375, y: 120.13081395348837 },
    { id: 11, x: 103.3125, y: 112.30232558139531 },
    { id: 12, x: 111.25, y: 120.23546511627907 },
    { id: 13, x: 119.1875, y: 144.63372093023253 },
    { id: 14, x: 127.125, y: 176 },
    { id: 15, x: 135.0625, y: 162.2325581395349 },
    { id: 16, x: 143, y: 144.36337209302326 },
    { id: 17, x: 150.9375, y: 152.3953488372093 },
    { id: 18, x: 158.875, y: 144.62209302325581 },
    { id: 19, x: 166.8125, y: 129.953488372093 },
    { id: 20, x: 174.75, y: 103.3517441860465 },
    { id: 21, x: 182.6875, y: 112.34011627906975 },
    { id: 22, x: 190.625, y: 136.2645348837209 },
    { id: 23, x: 198.5625, y: 129.63372093023256 },
    { id: 24, x: 206.5, y: 120.09593023255812 },
    { id: 25, x: 214.4375, y: 153.296511627907 },
    { id: 26, x: 222.375, y: 136.52325581395348 },
    { id: 27, x: 230.3125, y: 143.70348837209303 },
    { id: 28, x: 238.25, y: 132.5581395348837 },
    { id: 29, x: 246.1875, y: 159.04941860465118 },
    { id: 30, x: 254.125, y: 144.24127906976742 },
    { id: 31, x: 262.0625, y: 127.0232558139535 },
    { id: 32, x: 270, y: 103.22093023255815 },
  ];
  currentObject: { id: number; x: number; y: number } | null = null;

  updateMouseCoordinates(event: MouseEvent) {
    if (this.svgElement) {
      const svgRect = this.svgElement.nativeElement.getBoundingClientRect();
      const mouseX = event.clientX - svgRect.left;

      // Binary search function to find the closest object
      const findClosest = (
        arr: { id: number; x: number; y: number }[],
        target: number
      ) => {
        let left = 0;
        let right = arr.length - 1;
        let closestIndex = -1;
        let closestDistance = Number.MAX_VALUE;

        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          const distance = Math.abs(arr[mid].x - target);

          if (distance < closestDistance) {
            closestIndex = mid;
            closestDistance = distance;
          }

          if (arr[mid].x < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }

        return closestIndex;
      };

      // Find the closest object using binary search
      const closestIndex = findClosest(this.data, mouseX);
      const closestObject = this.data[closestIndex];
      this.currentObject = closestObject;
      this.hoverChange.emit({
        isHovering: this.isHovering,
        objectId: closestObject.id,
      });
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.updateMouseCoordinates(event);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovering = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovering = false;
    this.hoverChange.emit({
      isHovering: false,
      objectId: 32,
    });
  }
}
