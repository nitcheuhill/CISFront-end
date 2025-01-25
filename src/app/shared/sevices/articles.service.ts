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
      alt: 'Personnel de maintenance industrielle',
      type: 'Maintenance',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
      vitae hendrerit hendrerit. Amet eu.`,
      authorName: 'Gaëlle RITHEL',
      date: new Date(2025,0, 11),
      bannerImage: '/images/assetsArticles/img2.jpeg',
      authorImage: '/images/assetsArticles/photo1.jpeg'

    },
    {
      id: 2,
      title: 'Des équipements industriels pour vos défis',
      imageUrl: '/images/Frame 24 (2).png',
      alt: 'Technicien avec équipement industriel',
      type: 'Production',
      description: `Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet.`,
      authorName: 'Jean DUPONT',
        date: new Date(2025,2, 12),
        bannerImage: '/images/assetsArticles/img1.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg'
      },
      {
        id: 3,
        title: 'Experts en équipements et services industriels',
        imageUrl: '/images/img2.jpeg',
        alt: 'Expert en équipement industriel au travail',
        type: 'Maintenance',
        description: `Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.`,
        authorName: 'Marie CLAIRE',
        date: new Date(2025,0, 15),
        bannerImage: '/images/assetsArticles/img3.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg'
      },
      {
        id: 4,
        title: "Technologies innovantes pour l'industrie",
        imageUrl: '/images/Frame 23 (1).png',
        alt: 'Personnel de maintenance industrielle',
        type: 'Energie',
        description: `Quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
        authorName: 'Paul MARTIN',
        date: new Date(2025,1, 19),
        bannerImage: '/images/assetsArticles/img1.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg'
      },
      {
        id: 5,
        title: "Réduisez l'impact écologique de vos usines",
        imageUrl: '/images/Frame 24 (2).png',
        alt: 'Expert en équipement industriel au travail',
        type: 'Climatisation',
        description: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
        authorName: 'Sophie LEROY',
        date: new Date(2025,1, 2),
        bannerImage: '/images/assetsArticles/img2.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg'
      }
      // ,
      // {
      //   id: 6,
      //   title: 'Experts en équipements et services industriels',
      //   imageUrl: '/images/img2.jpeg',
      //   alt: 'Expert en équipement industriel au travail',
      //   type: 'Infrastructure',
      //   description: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
      //   authorName: 'Sophie LEROY',
      //   date: new Date(2025,1, 11),
      //   bannerImage: '/images/assetsArticles/img3.jpeg',
      //   authorImage: '/images/assetsArticles/photo1.jpeg'
        
      // }
      ,
      {
        id: 7,
        title: 'Experts en équipements et services industriels',
        imageUrl: '/images/img2.jpeg',
        alt: 'Expert en équipement industriel au travail',
        type: 'Equipements',
        description: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
        authorName: 'Sophie LEROY',
        date: new Date(2025,11, 11),
        bannerImage: '/images/assetsArticles/img1.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg'
        
      },
      {
        id: 8,
        title: 'Maintenance industrielle : évitez les pannes',
        imageUrl: '/images/Frame 23 (1).png',
        alt: 'Personnel de maintenance industrielle',
        type: 'Maintenance',
        description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper 
        duis nibh vitae elementum.`,
        authorName: 'Gaëlle RITHEL',
        date: new Date(2025,6, 11),
        bannerImage: '/images/assetsArticles/img2.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg'

      },
    ];

  getArticles() {
    return this.articles;
  }


}
