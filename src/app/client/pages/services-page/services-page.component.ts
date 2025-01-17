import { Component} from '@angular/core';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { RequestFormComponent } from '../../../shared/components/request-form/request-form.component';
import { ServiceDataService } from '../../../shared/sevices/service-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-page',
  imports: [ServiceCardComponent, RequestFormComponent, CommonModule],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  services: any[] = []; 

  constructor(private servicesService: ServiceDataService) {}

  ngOnInit() {
    this.services = this.servicesService.getServices();
    console.log('Services récupérés :', this.services);
  }

}
