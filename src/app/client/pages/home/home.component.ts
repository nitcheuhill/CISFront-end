import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemoignageComponent } from '../../../shared/components/temoignage/temoignage.component';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { ArticlesComponent } from '../../../shared/components/articles/articles.component';
import { RouterModule, Router} from '@angular/router';
import { ServiceDataService } from '../../../shared/sevices/service-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule, TemoignageComponent,ContactFormComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  infoservices : any [] = [];
  constructor(private servicesService : ServiceDataService,
    private router: Router 
  ) { }
  isSmallScreen: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());

    this.infoservices = this.servicesService.getServices();
    console.log('Services récupérés :', this.infoservices);
   }
   checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768; // Ajuste selon ton besoin
  }
  getShortTitle(title: string): string {
    if (title.length > 20) {
      return this.isSmallScreen ? title.slice(0, 30) + '...' : title;
    }
    return title;
  }

   onServiceClick(service: any): void {
    this.router.navigate(['/service', service.title]);
  }  
  onViewRealisations(): void {
    // Pour l'instant vide - à implémenter plus tard
    console.log('Voir nos réalisations clicked');
  }

}
