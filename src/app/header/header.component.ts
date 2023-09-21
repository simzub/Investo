import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('myModal', { static: false }) modal!: ElementRef;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.isModalOpen = false;
    this.modal.nativeElement.style.display = 'none';
  }
}
