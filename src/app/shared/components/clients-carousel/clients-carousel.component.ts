import { Component, AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clients-carousel',
  imports: [CommonModule],
  templateUrl: './clients-carousel.component.html',
  styleUrl: './clients-carousel.component.scss'
})
export class ClientsCarouselComponent {
  logos = [
    { src: '/images/logo3_prev_ui.png', alt: 'Logo 1' },
    { src: '/images/logo-bcc0 1.png', alt: 'Logo 2' },
    { src: '/images/logo3_prev_ui.png', alt: 'Logo 3' },
    { src: '/images/logo 1.png', alt: 'Logo 4' },
    { src: '/images/logo3_prev_ui.png', alt: 'Logo 5' },
    { src: '/images/logo3_prev_ui.png', alt: 'Logo 6' },
    { src: '/images/logo3_prev_ui.png', alt: 'Logo 6' },
    { src: '/images/logo-bcc0 1.png', alt: 'Logo 2' },
    { src: '/images/logo-bcc0 1.png', alt: 'Logo 2' },
    { src: '/images/logo-bcc0 1.png', alt: 'Logo 2' },
    { src: '/images/logo3_prev_ui.png', alt: 'Logo 6' },
  ];



}
