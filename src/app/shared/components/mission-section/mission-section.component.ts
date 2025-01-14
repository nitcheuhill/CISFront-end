import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-section',
  imports: [CommonModule],
  templateUrl: './mission-section.component.html',
  styleUrl: './mission-section.component.scss'
})
export class MissionSectionComponent {
  missions = [
    {
      icon: '/path/to/icon1.png',
      desc: "De participer au développement local des marques d'équipements techniques",
    },
    {
      icon: '/path/to/icon2.png',
      desc: "D'assurer la mise en œuvre locale des systèmes d'équipements intégrés",
    },
    {
      icon: '/path/to/icon3.png',
      desc: "D'assurer le suivi et la maintenance quotidienne des infrastructures technologiques",
    },
    {
      icon: '/path/to/icon4.png',
      desc: "D'accompagner les constructeurs d'équipements dans le processus de maîtrise continue de la qualité",
    },
  ];
}
