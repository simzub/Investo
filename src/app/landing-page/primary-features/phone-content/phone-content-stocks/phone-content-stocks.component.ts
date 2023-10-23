import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-content-stocks',
  templateUrl: './phone-content-stocks.component.html',
  styleUrls: ['./phone-content-stocks.component.scss'],
})
export class PhoneContentStocksComponent {
  stockItems = [
    { title: 'Laravel', price: '4,098.01', change: 4.98 },
    { title: 'Tuple', price: '5,451.10', change: -3.38 },
    { title: 'Transistor', price: '4,098.41', change: 6.25 },
    { title: 'Diageo', price: '250.65', change: 1.25 },
    { title: 'StaticKit', price: '250.65', change: -3.38 },
    { title: 'Statamic', price: '5,040.85', change: -3.11 },
    { title: 'Mirage', price: '140.44', change: 9.09 },
    { title: 'Reversable', price: '550.60', change: -1.25 },
  ];
}
