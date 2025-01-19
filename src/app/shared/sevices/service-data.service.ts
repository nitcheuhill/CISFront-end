import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  private infoservices = [
    {
      title: 'Climatisation, Ventilation, Désenfumage',
      icon: '/icons/Calque_1 (1).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
        Amet eu.Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna 
        ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna
        tristique amet in Amet eu..
      `,
      imageUrl: 'images/HeaderDetailService1.png',
      subServices: [
        {
          title: 'Conditionnement d’air résidentiel et commercial',
          description1: [
            `Hello Word`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          description: [
            `Lorem ipsum dolor sit amet consectetur.
            Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit. Amet eu..`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
            natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
            sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block1/thumbnail.jpeg',
            url: 'images/vidéos/Video.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block1/Frame 94 (1).png', alt: 'Image 1' },
            { src: 'images/assetsDétailsServices/Block1/Frame 95 (1).png', alt: 'Image 2' },
            { src: 'images/assetsDétailsServices/Block1/Frame 92 (1).png', alt: 'Image 3' },
            { src: 'images/assetsDétailsServices/Block1/Frame 95 (1).png', alt: 'Image 2' },
            { src: 'images/assetsDétailsServices/Block1/Frame 92 (1).png', alt: 'Image 3' },
          ]
        },
        {
          title: 'Conditionnement d’air des centres de données (data center)',
          description1: [
            `Lorem ipsum dolor sit amet consectetur.`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          description: [
            `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block2/Frame 97.png', alt: 'Technician working on AC' },
            { src: 'images/assetsDétailsServices/Block2/Frame 99.png', alt: 'Close-up of AC system' },
            { src: 'images/assetsDétailsServices/Block2/Frame100.png', alt: 'Installed AC unit' },
            { src: 'images/assetsDétailsServices/Block2/Frame100.png', alt: 'Installed AC unit' },
          ]
        },
        {
          title: 'Refroidissement des process industriels',
          description1: [
            `Lorem ipsum dolor sit amet consectetur.`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          description: [
            `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`,
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
            url: 'images/vidéos/Video1.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block2/Frame 97.png', alt: 'Technician working on AC' },
            { src: 'images/assetsDétailsServices/Block2/Frame 99.png', alt: 'Close-up of AC system' },
            { src: 'images/assetsDétailsServices/Block2/Frame100.png', alt: 'Installed AC unit' },
            { src: 'images/assetsDétailsServices/Block2/Frame100.png', alt: 'Installed AC unit' },
          ]
        },
      ]
    },
    {
      title: 'Energie Electrique',
      icon: '/icons/IconsServicesGrid/Calque_1 (12).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/portrait-firefighter-standing-front-fire-engine.jpg',
      subServices: [
        {
          title: 'Courant fort (basse, moyenne et haute tension)',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Traitement d\'énergie électrique (stabilisation, stockage, et filtrage)',
          description1: [
            `Details on Traitement energie`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Courant faible (sécurité incendie, alarme d\'intrusion, sonorisation et télécommunication)',
          description1: [
            `Details on courant faible`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        }
      ]
    },
    {
      title: 'Energie Renouvelable',
      icon: '/icons/IconsServicesGrid/Calque_1 (13).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService2.png',
      subServices: [
        {
          title: 'Production photovoltaïque',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Production éolienne',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Énergie hydraulique, géothermique et biomasse',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        }
      ]
    },
    {
      title: 'Infrastructure de plomberie',
      icon: '/icons/IconsServicesGrid/Calque_1 (14).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService2.png',
      subServices: [
        {
          title: 'Systèmes d\'installations sanitaires domestique et industriel',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Systèmes de distribution de gaz résidentiel et collectif',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Systèmes de production et distribution d\'air comprimé',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Systèmes de distribution des fluides industriel',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
      ]
    },
    {
      title: 'Production d\'énergie électrique',
      icon: '/icons/IconsServicesGrid/Calque_1 (15).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService2.png',
      subServices: [
        {
          title: 'Groupe électrogène à combustion (essence, gasoil et gaz)',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },

      ]
    },
    {
      title: 'Infrastructure de lutte contre l\'incendie',
      icon: '/icons/IconsServicesGrid/Calque_1 (16).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService2.png',
      subServices: [
        {
          title: 'Désenfumage',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Auto-extinction de feu',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Extinction manuelle de feu',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },

      ]
    },
    {
      title: 'Équipement mécanique de transport et de levage',
      icon: '/icons/IconsServicesGrid/Calque_1 (19).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService2.png',
      subServices: [
        {
          title: 'Ascenseur',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Monte-charge',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
      ]
    },
    {
      title: 'Production et traitement de l\'eau',
      icon: '/icons/IconsServicesGrid/Calque_1 (17).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService2.png',
      subServices: [
        {
          title: 'Captage, pompage, filtrage et stockage',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Epuration et dépollution',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
      ]
    },
    {
      title: 'Equipements spécifiques',
      icon: '/icons/IconsServicesGrid/Calque_1 (18).png',
      introText: `
        Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
        nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
        nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
        Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
      `,
      imageUrl: 'images/HeaderDetailService2.png',
      subServices: [
        {
          title: 'Systèmes de conservation par le froid',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Systèmes de production de la vapeur',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
        {
          title: 'Systèmes de production, traitement et  stockage d’eau chaude',
          description1: [
            `Details on courant fort`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          description: [
            `Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
            `Lorem ipsum dolor sit amet consectetur adipiscing elit.`
          ],
          video: {
            thumbnail: 'images/assetsDétailsServices/Block3/thumbnail.jpeg',
            url: 'images/vidéos/Video2.mp4',
          },
          images: [
            { src: 'images/assetsDétailsServices/Block3/Frame 101.png', alt: 'Power grid' },
            { src: 'images/assetsDétailsServices/Block3/Frame 102.png', alt: 'Electric system' },
          ]
        },
      ]
    },
    // Ajoutez ici les autres services et sous-services
  ];
  
  // this.services 
  getServices() {
    return  this.infoservices;
  }
}
