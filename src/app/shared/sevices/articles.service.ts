import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles = [
    {
      id: 1,
      title: 'Maintenance industrielle : évitez les pannes',
      imageUrl: '/images/Frame 23 (1).png',
      alt: 'Personnel de maintenance industrielle'
    },
    {
      id: 2,
      title: 'Des équipements industriels pour vos défis',
      imageUrl: '/images/Frame 24 (2).png',
      alt: 'Technicien avec équipement industriel'
    },
    {
      id: 3,
      title: 'Experts en équipements et services industriels',
      imageUrl: '/images/img2.jpeg',
      alt: 'Expert en équipement industriel au travail'
    },
    {
      id: 4,
      title: 'Maintenance industrielle : évitez les pannes',
      imageUrl: '/images/Frame 23 (1).png',
      alt: 'Personnel de maintenance industrielle'
    },
    {
      id: 5,
      title: 'Experts en équipements et services industriels',
      imageUrl: '/images/Frame 24 (2).png',
      alt: 'Expert en équipement industriel au travail'
    },
    {
      id: 6,
      title: 'Experts en équipements et services industriels',
      imageUrl: '/images/img2.jpeg',
      alt: 'Expert en équipement industriel au travail'
    }
  ];

  getArticles() {
    return this.articles;
  }

  // getArticleById(id: number) {
  //   return this.articles.find(article => article.id === id);
  // }
}
