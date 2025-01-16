import { Component , Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-video',
  imports: [CommonModule],
  templateUrl: './modal-video.component.html',
  styleUrl: './modal-video.component.scss'
})
export class ModalVideoComponent implements OnChanges {
  @Input() videoUrl: string = '';
  isOpen: boolean = false;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['videoUrl']) {
      // Pas besoin de sanitizer pour une vidéo locale
    }
  }

  openModal() {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(event: MouseEvent) {
    if (
      event.target instanceof Element && 
      (event.target.classList.contains('modal-overlay') || 
       event.target.classList.contains('close-button'))
    ) {
      this.isOpen = false;
      document.body.style.overflow = 'auto';
    }
  }
}
