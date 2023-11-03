import { NgModule } from '@angular/core';
import { FaqsListComponent } from './faqs-list/faqs-list.component';
import { FaqsComponent } from './faqs.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FaqsListComponent, FaqsComponent],
  imports: [CommonModule],
  exports: [FaqsComponent],
})
export class FaqsModule {}
