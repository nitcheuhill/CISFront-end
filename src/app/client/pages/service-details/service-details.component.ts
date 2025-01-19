import { Component ,Input, ViewChild,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../../shared/components/service-card/service-card.component';
import { ServiceDataService } from '../../../shared/sevices/service-data.service';
import { ModalVideoComponent } from '../../../shared/components/modal-video/modal-video.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  imports: [CommonModule,ServiceCardComponent,ModalVideoComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent implements OnInit {
  @ViewChild(ModalVideoComponent) videoModal!: ModalVideoComponent;
  // Service courant affiché
  currentService: any;
  // Autres services à afficher
  infoservices: any[] = [];
  
  constructor(
    private servicesService: ServiceDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Récupérer tous les services
    this.infoservices = this.servicesService.getServices();
    
    // Récupérer le service sélectionné via l'URL ou autre méthode
    this.route.params.subscribe(params => {
      const serviceTitle = params['title']; // ou autre paramètre que vous utilisez
      this.currentService = this.infoservices.find(service => 
        service.title === serviceTitle
      );
    });
  }

  // Méthode pour ouvrir la modal vidéo
  openVideoModal(videoUrl: string) {
    if (this.videoModal) {
      this.videoModal.videoUrl = videoUrl;
      this.videoModal.openModal();
    }
  }

  // Helper pour déterminer quels blocks afficher
  shouldShowBlock(blockNumber: number): boolean {
    if (!this.currentService?.subServices) return false;
    return blockNumber <= this.currentService.subServices.length;
  }



}
