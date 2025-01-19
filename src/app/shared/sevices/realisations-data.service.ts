import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealisationsDataService {
  private realisations = [
    {
      titre: 'Installation de climatisation',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: 'images/realisationsassets/carpenter-cutting-mdf-board-inside-workshop (2).jpg',
      categorie: 'Climatisation',
      date: new Date(2023, 5, 12),
    },
    {
      titre: 'Maintenance d’équipements industriels',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: 'images/realisationsassets/carpenter-cutting-mdf-board-inside-workshop (2).jpg',
      categorie: 'Maintenance',
      date: new Date(2023, 3, 20),
    },
    {
      titre: 'Installation énergétique',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: 'images/img2.jpeg',
      categorie: 'Energie',
      date: new Date(2023, 1, 18),
    },
    {
      titre: 'Installation énergétique',
      description: `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum.`,
      image: 'images/img2.jpeg',
      categorie: 'Climatisation',
      date: new Date(2023, 1, 18),
    },
  ];
  getRealisations() {
    return this.realisations;
  }
}
