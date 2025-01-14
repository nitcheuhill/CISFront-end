import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temoignage',
  imports: [CommonModule],
  templateUrl: './temoignage.component.html',
  styleUrl: './temoignage.component.scss',
 
})
export class TemoignageComponent implements OnInit{
  protected Math = Math;
  testimonials = [
    {
      image: '/images/Frame 12.png',
      name: 'Celine Tirnest',
      poste: 'Directrice logistique',
      temoignage: 'La gamme de produits industriels est impressionnante. Nous avons trouvé tout ce dont nous avions besoin pour notre chaîne de production. En plus, leur service après-vente est excellent.'
    },
    {
      image: '/images/Frame 12 (1).png',
      name: 'Ryan Milton',
      poste: 'Responsable d\'usine',
      temoignage: 'Nous travaillons avec cette entreprise depuis plusieurs années, et leur réactivité est exemplaire. Que ce soit pour l\'achat d\'équipements ou pour la maintenance, leur équipe est toujours disponible et compétente. Je recommande vivement !'
    },
    {
      image: '/images/Frame 12 (2).png',
      name: 'Edward Twistered',
      poste: 'Ingénieur en production',
      temoignage: 'Nous avons fait appel à eux pour l\'installation de nouveaux équipements. L\'équipe technique a été rapide, professionnelle et a su s\'adapter à nos contraintes de temps. C\'est un plaisir de travailler avec eux.'
    },
    {
      image: '/images/Frame 12.png',
      name: 'Celine Tirnest',
      poste: 'Directrice logistique',
      temoignage: 'La gamme de produits industriels est impressionnante. Nous avons trouvé tout ce dont nous avions besoin pour notre chaîne de production. En plus, leur service après-vente est excellent.'
    },
    {
      image: '/images/Frame 12 (2).png',
      name: 'Edward Twistered',
      poste: 'Ingénieur en production',
      temoignage: 'Nous avons fait appel à eux pour l\'installation de nouveaux équipements. L\'équipe technique a été rapide, professionnelle et a su s\'adapter à nos contraintes de temps. C\'est un plaisir de travailler avec eux.'
    }
  ];

  
  currentIndex = 0;

  nextTestimonial() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    }
  }

  prevTestimonial() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }


  ngOnInit() {}
}
