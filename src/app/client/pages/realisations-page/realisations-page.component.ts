import { Component, OnInit } from '@angular/core';
import { RealisationsDataService } from '../../../shared/sevices/realisations-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from '../../../shared/components/articles/articles.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';


@Component({
  selector: 'app-realisations-page',
  imports: [CommonModule, FormsModule,ArticlesComponent, FontAwesomeModule,LoaderComponent],
  templateUrl: './realisations-page.component.html',
  styleUrl: './realisations-page.component.scss'
})
export class RealisationsPageComponent implements OnInit {
  realisations: any[] = [];
  filteredRealisations: any[] = [];
  paginatedRealisations: any[] = [];
  categories: string[] = ['Maintenance', 'Equipements', 'Energie', 'Climatisation', 'Production', 'Infrastructure'];
  dateDebut: string = '';
  dateFin: string = '';
  searchTerm: string = '';
  isLoading: boolean = true;

    // Pagination
    currentPage: number = 1;
    pageSize: number = 2;
    totalPages: number = 0;
    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

  constructor(private dataRealisationService: RealisationsDataService) {}

  ngOnInit(): void {
    this.realisations = this.dataRealisationService.getRealisations();
    this.filteredRealisations = this.realisations; // Initialisation
    this.updatePagination();
    this.loadData();
  }

    //méthode du loader

    
  private async loadData(): Promise<void> {
    try {
      this.isLoading = true;
      // Simuler un délai pour voir le loader (à enlever en production)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.realisations = this.dataRealisationService.getRealisations();
      this.filteredRealisations = this.realisations;
      this.updatePagination();
    } finally {
      this.isLoading = false;
    }
  }

    // Méthode pour mettre à jour la pagination
    private updatePagination(): void {
      this.totalPages = Math.ceil(this.filteredRealisations.length / this.pageSize);
      this.currentPage = Math.min(this.currentPage, this.totalPages);
      if (this.currentPage === 0 && this.totalPages > 0) this.currentPage = 1;
      this.updatePaginatedRealisations();
    }

      // Mettre à jour les réalisations paginées
  private updatePaginatedRealisations(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedRealisations = this.filteredRealisations.slice(startIndex, endIndex);
  }

    // Navigation dans la pagination
    goToPage(page: number): void {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.updatePaginatedRealisations();
      }
    }
  
    // Vérifier si les boutons doivent être désactivés
    isPreviousDisabled(): boolean {
      return this.currentPage <= 1 || this.totalPages === 0;
    }
  
    isNextDisabled(): boolean {
      return this.currentPage >= this.totalPages || this.totalPages === 0;
    }

  // Mettre à jour tous vos filtres pour gérer le loading
  filterByOrder(order: string): void {
    this.isLoading = true;
    setTimeout(() => {
      if (order === 'recent') {
        this.filteredRealisations = [...this.realisations].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      } else if (order === 'ancien') {
        this.filteredRealisations = [...this.realisations].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      }
      this.currentPage = 1;
      this.updatePagination();
      this.isLoading = false;
    }, 500);
  }

  filterByCategory(category: string): void {
    this.isLoading = true;
    setTimeout(() => {
      this.filteredRealisations = this.realisations.filter(
        realisation => realisation.categorie === category
      );
      this.currentPage = 1;
      this.updatePagination();
      this.isLoading = false;
    }, 500);
  }

  filterByDate(): void {
    this.isLoading = true;
    setTimeout(() => {
      if (this.dateDebut && this.dateFin) {
        const start = new Date(this.dateDebut).getTime();
        const end = new Date(this.dateFin).getTime();
        this.filteredRealisations = this.realisations.filter(realisation => {
          const realisationDate = new Date(realisation.date).getTime();
          return realisationDate >= start && realisationDate <= end;
        });
        this.currentPage = 1;
        this.updatePagination();
      }
      this.isLoading = false;
    }, 500);
  }

  filterBySearch(): void {
    this.isLoading = true;
    setTimeout(() => {
      const term = this.searchTerm.toLowerCase();
      this.filteredRealisations = this.realisations.filter(realisation =>
        realisation.titre.toLowerCase().includes(term) || 
        realisation.description.toLowerCase().includes(term)
      );
      this.currentPage = 1;
      this.updatePagination();
      this.isLoading = false;
    }, 500);
  }
}
