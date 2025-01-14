import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemoignageComponent } from '../../../shared/components/temoignage/temoignage.component';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { ArticlesComponent } from '../../../shared/components/articles/articles.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule, TemoignageComponent,ContactFormComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  services = [
    { 
      icon: '/icons/Calque_1 (1).png',
      desc: 'Climatisation, Ventilation, Désenfumage'
    },
    { 
      icon: '/icons/Calque_1 (2).png',
      desc: 'Énergie Électrique'
    },
    { 
      icon: '/icons/Calque_1 (3).png',
      desc: 'Énergie Renouvelable'
    },
    { 
      icon: '/icons/Calque_1 (4).png',
      desc: 'Infrastructure de plomberie'
    },
    { 
      icon: '/icons/Calque_1 (5).png',
      desc: 'Production d\'énergie électrique'
    },
    { 
      icon: '/icons/Calque_1 (6).png',
      desc: 'Infrastructure de lutte contre l\'incendie'
    },
    { 
      icon: '/icons/Calque_1 (7).png',
      desc: 'Équipement mécanique de transport et de levage'
    },
    { 
      icon: '/icons/Calque_1 (9).png',
      desc: 'Production et traitement de l\'eau'
    },
    { 
      icon: '/icons/Calque_1 (10).png',
      desc: 'Équipements spécifiques'
    }
  ];

  
  constructor() { }

  ngOnInit(): void { }  
  onViewRealisations(): void {
    // Pour l'instant vide - à implémenter plus tard
    console.log('Voir nos réalisations clicked');
  }

}
