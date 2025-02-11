import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealisationsDataService {
  private realisations = [
    {
      id: 1,
      title: 'Installation de climatisation',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: '/images/assetsArticles/img2.jpeg',
      categorie: 'Climatisation',
      date: new Date(2023, 5, 12),
      bannerImage: '/images/vent.png',
      type:'Energie',
      temps:10,
      infoProject:[
        {
          client:{
            name: 'Société Générale',
            logo: 'images/assetsDétailsServices/Block2/Frame 97.png',
          },
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            { src: '/images/Maintenance.jpg', alt: 'Image 1' },
            { src: '/images/Maintenance1.jpg', alt: 'Image 2' },
            { src: '/images/portrait-firefighter-standing-front-fire-engine.jpg', alt: 'Image 3' },
            { src: '/images/vent.png', alt: 'Image 2' },
            { src: '/images/realisationsassets/carpenter-cutting-mdf-board-inside-workshop (2).jpg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block1/thumbnail.jpeg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block4/banner5.jpg', alt: 'Image 3' },
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Maintenance d’équipements industriels',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: 'images/realisationsassets/carpenter-cutting-mdf-board-inside-workshop (2).jpg',
      categorie: 'Maintenance',
      date: new Date(2023, 3, 20),
      bannerImage: '/images/vent.png',
      type:'Energie',
      temps:20,
      infoProject:[
        {
          client:{
            name: 'UCB',
            logo: 'images/assetsDétailsServices/Block2/Frame 97.png',
          },
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            { src: '/images/Maintenance.jpg', alt: 'Image 1' },
            { src: '/images/Maintenance1.jpg', alt: 'Image 2' },
            { src: '/images/portrait-firefighter-standing-front-fire-engine.jpg', alt: 'Image 3' },
            { src: '/images/vent.png', alt: 'Image 2' },
            { src: '/images/realisationsassets/carpenter-cutting-mdf-board-inside-workshop (2).jpg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block1/thumbnail.jpeg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block4/banner5.jpg', alt: 'Image 3' },
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Installation énergétique',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: 'images/img2.jpeg',
      categorie: 'Energie',
      date: new Date(2023, 1, 18),
      bannerImage: '/images/energique.png',
      type:'Energique',
      temps:15,
      infoProject:[
        {
          client:{
            name: 'Bicec',
            logo: 'images/assetsDétailsServices/Block2/Frame 97.png',
          },
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            { src: '/images/Maintenance.jpg', alt: 'Image 1' },
            { src: '/images/Maintenance1.jpg', alt: 'Image 2' },
            { src: '/images/portrait-firefighter-standing-front-fire-engine.jpg', alt: 'Image 3' },
            { src: '/images/vent.png', alt: 'Image 2' },
            { src: '/images/realisationsassets/carpenter-cutting-mdf-board-inside-workshop (2).jpg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block1/thumbnail.jpeg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block4/banner5.jpg', alt: 'Image 3' },
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Installation plomberie',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: 'images/img2.jpeg',
      categorie: 'Climatisation',
      date: new Date(2023, 1, 18),
      bannerImage: '/images/energique.png',
      type:'Energique',
      temps:90,
      infoProject:[
        {
          client:{
            name: 'Société Générale',
            logo: 'images/assetsDétailsServices/Block2/Frame 97.png',
          },
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            { src: '/images/Maintenance.jpg', alt: 'Image 1' },
            { src: '/images/Maintenance1.jpg', alt: 'Image 2' },
            { src: '/images/portrait-firefighter-standing-front-fire-engine.jpg', alt: 'Image 3' },
            { src: '/images/vent.png', alt: 'Image 2' },
            { src: '/images/realisationsassets/carpenter-cutting-mdf-board-inside-workshop (2).jpg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block1/thumbnail.jpeg', alt: 'Image 2' },
            { src: '/images/assetsDétailsServices/Block4/banner5.jpg', alt: 'Image 3' },
          ]
        }
      ]
    },
  ];
  getRealisations() {
    return this.realisations;
  }
}
