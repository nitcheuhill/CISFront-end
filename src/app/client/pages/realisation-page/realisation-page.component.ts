import { Component , OnInit, ViewChild} from '@angular/core';
import { ModalVideoComponent } from '../../../shared/components/modal-video/modal-video.component';
import { RealisationsDataService } from '../../../shared/sevices/realisations-data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-realisation-page',
  standalone: true,
  imports: [CommonModule,RouterModule,ModalVideoComponent],
  templateUrl: './realisation-page.component.html',
  styleUrl: './realisation-page.component.scss'
})
export class RealisationPageComponent implements OnInit {
  @ViewChild(ModalVideoComponent) videoModal!: ModalVideoComponent;
  currentService:any;
  isModalOpen = false;
  inforealisation : any[] = [];

  constructor(
    private servicesService : RealisationsDataService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.inforealisation = this.servicesService.getRealisations();
    // Récupérer le service sélectionné via l'URL ou autre méthode
    this.route.params.subscribe(params => {
      const serviceTitle = params['title']; // ou autre paramètre que vous utilisez
      console.log('Searching for titre:', serviceTitle); // Debug
      console.log('Available realisations:', this.inforealisation); // Debug
      this.currentService = this.inforealisation.find(service => 
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
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
