import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalVideoComponent } from '../../../shared/components/modal-video/modal-video.component';
import { ArticlesService } from '../../../shared/sevices/articles.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentModalComponent } from '../../../shared/components/comment-modal/comment-modal.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-articles-details',
  imports: [CommonModule,RouterModule, ModalVideoComponent, CommentModalComponent],
  templateUrl: './articles-details.component.html',
  styleUrl: './articles-details.component.scss'
})
export class ArticlesDetailsComponent implements OnInit {
  @ViewChild(ModalVideoComponent) videoModal!: ModalVideoComponent;

  currentService: any;
  isModalOpen = false;
  infoarticles: any[] = [];

  constructor(
    private servicesService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Récupérer tous les services
    this.infoarticles = this.servicesService.getArticles();

    // Récupérer le service sélectionné via l'URL ou autre méthode
    this.route.params.subscribe(params => {
      const serviceTitle = params['title']; // ou autre paramètre que vous utilisez
      this.currentService = this.infoarticles.find(service =>
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
    if (!this.currentService?.blog) return false;
    return blockNumber <= this.currentService.blog.length;
  }



  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


}


