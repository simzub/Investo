import {
  state,
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('closed', style({ opacity: 0, top: '-300px' })),
      state('open', style({ opacity: 1, top: '0' })),
      transition('closed <=> open', animate('0.3s')),
    ]),
  ],
})
export class HeaderComponent {
  @ViewChild('myModal', { static: false }) modal!: ElementRef;
  isModalOpen = false;
  animationState = 'closed';

  constructor(private renderer: Renderer2) {}

  openModal() {
    this.isModalOpen = true;
    this.modal.nativeElement.style.display = 'block';
    this.animationState = 'open';
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  closeModal() {
    if (this.animationState === 'open') {
      this.animationState = 'closed';
      setTimeout(() => {
        this.isModalOpen = false;
        this.modal.nativeElement.style.display = 'none';
        this.renderer.removeStyle(document.body, 'overflow');
      }, 300);
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (this.isModalOpen && this.modal.nativeElement === event.target) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isModalOpen && event.key === 'Escape') {
      this.closeModal();
    }
  }
}
