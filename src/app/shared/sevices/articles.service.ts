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
      authorImage: '/images/assetsArticles/photo1.jpeg',
      blog:[
        {
          title:'Conditionnement d’air résidentiel et commercial',
          description: [
            `Block1`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
        },
        {
          title:'Conditionnement d’air des centres de données (data center)',
          imageUrl: 'images/HeaderDetailService1.png',
          description: [
            `Block2`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          
        },
        {
          title:'Refroidissement des process industriels',
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          description: [
            `Block3`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],

        },
      ],
      commentaire:[
        {
          id: 1,
          authorName: 'Gaëlle RITHEL',
          date: new Date(2025,0, 12),
          authorImage: '/images/assetsArticles/photo1.jpeg',
          message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
          vitae hendrerit hendrerit. Amet eu.`,
        },
        {
          id: 2,
          authorName: 'Alex Hitche',
          date: new Date(2025,0, 11),
          authorImage: '/images/assetsArticles/photo1.jpeg',
          message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
          vitae hendrerit hendrerit. Amet eu.`,
        },
        {
          id: 3,
          authorName: 'Bertrand francklin',
          date: new Date(2025,0, 10),
          authorImage: '/images/assetsArticles/photo1.jpeg',
          message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
          vitae hendrerit hendrerit. Amet eu.`,
        }
      ],


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
        authorImage: '/images/assetsArticles/photo1.jpeg',
        blog:[
          {
            title:'Conditionnement d’air des centres de données (data center)',
            imageUrl: 'images/HeaderDetailService1.png',
            description: [
              `Block2`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
            
          },
          {
            title:'Refroidissement des process industriels',
            video: {
              thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
              url: 'images/vidéos/Video1.mp4',
            },
            description: [
              `Block3`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
  
          },
        ],
        commentaire:[
          {
            id: 1,
            authorName: 'Gaëlle RITHEL',
            date: new Date(2025,0, 12),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 2,
            authorName: 'Alex Hitche',
            date: new Date(2025,0, 11),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 3,
            authorName: 'Bertrand francklin',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 4,
            authorName: 'Claude BLc',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
        ],
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
        authorImage: '/images/assetsArticles/photo1.jpeg',
        blog:[
          {
            title:'Conditionnement d’air résidentiel et commercial',
            description: [
              `Block1`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
          },
        ],
        commentaire:[
          {
            id: 1,
            authorName: 'Gaëlle RITHEL',
            date: new Date(2025,0, 12),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 2,
            authorName: 'Alex gando',
            date: new Date(2025,0, 11),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 3,
            authorName: 'Berand francklin',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          }
        ],
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
        authorImage: '/images/assetsArticles/photo1.jpeg',
        blog:[
          {
            title:'Conditionnement d’air des centres de données (data center)',
            imageUrl: 'images/HeaderDetailService1.png',
            description: [
              `Block2`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
            
          },
          {
            title:'Refroidissement des process industriels',
            video: {
              thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
              url: 'images/vidéos/Video1.mp4',
            },
            description: [
              `Block3`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
  
          },
        ],
        commentaire:[
          {
            id: 1,
            authorName: 'Gaëlle RITHEL',
            date: new Date(2025,0, 12),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 2,
            authorName: 'Alex Hitche',
            date: new Date(2025,0, 11),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 3,
            authorName: 'Bertrand francklin',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 4,
            authorName: 'Claude BLc',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
        ],
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
        authorImage: '/images/assetsArticles/photo1.jpeg',
        blog:[
          {
            title:'Conditionnement d’air des centres de données (data center)',
            imageUrl: 'images/HeaderDetailService1.png',
            description: [
              `Block2`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
            
          },
        ],
        commentaire:[
          {
            id: 1,
            authorName: 'Gaëlle RITHEL',
            date: new Date(2025,0, 12),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 2,
            authorName: 'Alex Hitche',
            date: new Date(2025,0, 11),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 3,
            authorName: 'Bertrand francklin',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 4,
            authorName: 'Claude BLc',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
        ],
      }
      ,
      {
        id: 6,
        title: 'Experts en équipements et services domestiques',
        imageUrl: '/images/img2.jpeg',
        alt: 'Expert en équipement industriel au travail',
        type: 'Infrastructure',
        description: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
        authorName: 'Sophie LEROY',
        date: new Date(2025,1, 11),
        bannerImage: '/images/assetsArticles/img3.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg',
        blog:[
          {
            title:'Conditionnement d’air des centres de données (data center)',
            imageUrl: 'images/HeaderDetailService1.png',
            description: [
              `Block2`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
            
          },
          {
            title:'Refroidissement des process industriels',
            video: {
              thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
              url: 'images/vidéos/Video1.mp4',
            },
            description: [
              `Block3`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
  
          },
        ],
        commentaire:[
          {
            id: 1,
            authorName: 'Gaëlle RITHEL',
            date: new Date(2025,0, 12),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 2,
            authorName: 'Alex Hitche',
            date: new Date(2025,0, 11),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 3,
            authorName: 'Bertrand francklin',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 4,
            authorName: 'Claude BLc',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
        ],
        
      }
      ,
      {
        id: 7,
        title: 'Experts en équipements domotiques',
        imageUrl: '/images/img2.jpeg',
        alt: 'Expert en équipement industriel au travail',
        type: 'Equipements',
        description: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
        authorName: 'Sophie LEROY',
        date: new Date(2025,11, 11),
        bannerImage: '/images/assetsArticles/img1.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg',
        blog:[
          {
            title:'Conditionnement d’air des centres de données (data center)',
            imageUrl: 'images/HeaderDetailService1.png',
            description: [
              `Block2`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
            
          },
          {
            title:'Refroidissement des process industriels',
            video: {
              thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
              url: 'images/vidéos/Video1.mp4',
            },
            description: [
              `Block3`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
  
          },
        ],
        commentaire:[
          {
            id: 1,
            authorName: 'Gaëlle RITHEL',
            date: new Date(2025,0, 12),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 2,
            authorName: 'Alex Hitche',
            date: new Date(2025,0, 11),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 3,
            authorName: 'Bertrand francklin',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 4,
            authorName: 'Claude BLc',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
        ],
        
      },
      {
        id: 8,
        title: 'Maintenance domestique : Réaliser des montages ',
        imageUrl: '/images/Frame 23 (1).png',
        alt: 'Personnel de maintenance industrielle',
        type: 'Maintenance',
        description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper 
        duis nibh vitae elementum.`,
        authorName: 'Gaëlle RITHEL',
        date: new Date(2025,6, 11),
        bannerImage: '/images/assetsArticles/img2.jpeg',
        authorImage: '/images/assetsArticles/photo1.jpeg',
        blog:[
          {
            title:'Conditionnement d’air des centres de données (data center)',
            imageUrl: 'images/HeaderDetailService1.png',
            description: [
              `Block2`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
            
          },
          {
            title:'Refroidissement des process industriels',
            video: {
              thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
              url: 'images/vidéos/Video1.mp4',
            },
            description: [
              `Block3`,
              `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
              natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
              sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
            ],
  
          },
        ],
        commentaire:[
          {
            id: 1,
            authorName: 'Gaëlle RITHEL',
            date: new Date(2025,0, 12),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 2,
            authorName: 'Alex Hitche',
            date: new Date(2025,0, 11),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 3,
            authorName: 'Bertrand francklin',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
          {
            id: 4,
            authorName: 'Claude BLc',
            date: new Date(2025,0, 10),
            authorImage: '/images/assetsArticles/photo1.jpeg',
            message: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper.  
            vitae hendrerit hendrerit. Amet eu.`,
          },
        ],

      },
    ];

  getArticles() {
    return this.articles;
  }


}
