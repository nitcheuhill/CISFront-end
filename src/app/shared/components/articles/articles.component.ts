import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles = [
    {
      id: 1,
      title: 'Maintenance industrielle : évitez les pannes',
      imageUrl: '/images/Frame 23.png',
      alt: 'Personnel de maintenance industrielle'
    },
    {
      id: 2,
      title: 'Des équipements industriels pour vos défis',
      imageUrl: '/images/Frame 24.png',
      alt: 'Technicien avec équipement industriel'
    },
    {
      id: 3,
      title: 'Experts en équipements et services industriels',
      imageUrl: '/images/Frame 25.png',
      alt: 'Expert en équipement industriel au travail'
    },
    {
      id: 4,
      title: 'Maintenance industrielle : évitez les pannes',
      imageUrl: '/images/Frame 23.png',
      alt: 'Personnel de maintenance industrielle'
    },
    {
      id: 5,
      title: 'Experts en équipements et services industriels',
      imageUrl: '/images/Frame 25.png',
      alt: 'Expert en équipement industriel au travail'
    },
    {
      id: 6,
      title: 'Experts en équipements et services industriels',
      imageUrl: '/images/Frame 25.png',
      alt: 'Expert en équipement industriel au travail'
    }
  ];
}
