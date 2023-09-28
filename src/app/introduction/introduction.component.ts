import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  featuredIn: { name: string; width: number }[] = [
    { name: 'Forbes', width: 82 },
    { name: 'TechCrunch', width: 181 },
    { name: 'Wired', width: 121 },
    { name: 'CNN', width: 68 },
    { name: 'BBC', width: 83 },
    { name: 'CBS', width: 101 },
    { name: 'Fast-Company', width: 124 },
    { name: 'HuffPost', width: 142 },
  ];

  data = [
    { price: 997.56, percentage: null },
    { price: 944.34, percentage: -5.34 },
    { price: 972.25, percentage: 2.96 },
    { price: 832.4, percentage: -14.38 },
    { price: 888.76, percentage: 6.77 },
    { price: 834.8, percentage: -6.07 },
    { price: 805.56, percentage: -3.5 },
    { price: 767.38, percentage: -4.74 },
    { price: 861.21, percentage: 12.23 },
    { price: 669.6, percentage: -22.25 },
    { price: 694.39, percentage: 3.7 },
    { price: 721.32, percentage: 3.88 },
    { price: 694.03, percentage: -3.78 },
    { price: 610.1, percentage: -12.09 },
    { price: 502.2, percentage: -17.69 },
    { price: 549.56, percentage: 9.43 },
    { price: 611.03, percentage: 11.19 },
    { price: 583.4, percentage: -4.52 },
    { price: 610.14, percentage: 4.58 },
    { price: 660.6, percentage: 8.27 },
    { price: 752.11, percentage: 13.85 },
    { price: 721.19, percentage: -4.11 },
    { price: 638.89, percentage: -11.41 },
    { price: 661.7, percentage: 3.57 },
    { price: 694.51, percentage: 4.96 },
    { price: 580.3, percentage: -16.44 },
    { price: 638.0, percentage: 9.94 },
    { price: 613.3, percentage: -3.87 },
    { price: 651.64, percentage: 6.25 },
    { price: 560.51, percentage: -13.98 },
    { price: 611.45, percentage: 9.09 },
    { price: 670.68, percentage: 9.69 },
    { price: 752.56, percentage: 12.21 },
  ];

  isHovering: boolean = false;
  currentObjectId: number = this.data.length - 1;
  percentageStyle: { [key: string]: string } = { color: 'rgb(168 85 247)' };

  handleHoverChange(eventData: { isHovering: boolean; objectId: number }) {
    this.isHovering = eventData.isHovering;
    this.currentObjectId = eventData.objectId;

    // Dynamic color accent
    const selectedData = this.data[eventData.objectId];
    if (selectedData && selectedData.percentage !== null) {
      if (selectedData.percentage < 0) {
        this.percentageStyle = { color: 'rgb(107, 114, 128)' };
      } else {
        this.percentageStyle = { color: 'rgb(168 85 247)' };
      }
    }
  }
}
