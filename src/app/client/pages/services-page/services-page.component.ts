import { Component,Input} from '@angular/core';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { RequestFormComponent } from '../../../shared/components/request-form/request-form.component';
import { ServiceDataService } from '../../../shared/sevices/service-data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-page',
  imports: [RouterModule, RequestFormComponent, CommonModule],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  isActive1 = false;
  isHovering1 = false;
  toggleActive(containerIndex: number) {
    if (containerIndex === 1) {
      this.isActive1 = !this.isActive1;
    }
    // Répétez pour d'autres conteneurs si nécessaire
  }


  infoservices : any [] = [];
  constructor(private servicesService : ServiceDataService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.infoservices = this.servicesService.getServices();
    console.log('Services récupérés :', this.infoservices);
   }
   onServiceClick(service: any): void {
    this.router.navigate(['/service', service.title]);
  } 

}
