import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-carousel',
  imports: [CommonModule],
  templateUrl: './team-carousel.component.html',
  styleUrl: './team-carousel.component.scss'
})
export class TeamCarouselComponent {
  teamMembers = [
    {
      name: 'Anicet EBONGUE',
      position: 'Directeur Général CIS',
      image: '/images/Frame 93.png', // Remplacez par le chemin de votre image
    },
    {
      name: 'Tala Idriss.B',
      position: 'Manager CIS',
      image: '/images/Frame 94.png',
    },
    {
      name: 'Clarisse NOUWE',
      position: 'Directrice Marketing CIS',
      image: '/images/Frame 95.png',
    },
    {
      name: 'Fabien LUIGI',
      position: 'Formateur CIS',
      image: '/images/Frame 93.png',
    },
  ];
 
}
