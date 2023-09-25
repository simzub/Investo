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
}
