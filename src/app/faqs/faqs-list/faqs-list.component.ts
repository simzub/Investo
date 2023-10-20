import { Component, Input } from '@angular/core';

interface FAQItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs-list',
  templateUrl: './faqs-list.component.html',
  styleUrls: ['./faqs-list.component.scss'],
})
export class FaqsListComponent {
  @Input() faqs: FAQItem[] = [];
}
