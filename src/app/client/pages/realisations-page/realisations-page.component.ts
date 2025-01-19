import { Component, OnInit } from '@angular/core';
import { RealisationsDataService } from '../../../shared/sevices/realisations-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-realisations-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './realisations-page.component.html',
  styleUrl: './realisations-page.component.scss'
})
export class RealisationsPageComponent implements OnInit {
  realisations: any[] = [];
  filteredRealisations: any[] = [];
  categories: string[] = ['Maintenance', 'Equipements', 'Energie', 'Climatisation', 'Production', 'Infrastructure'];
  dateDebut: string = '';
  dateFin: string = '';
  searchTerm: string = '';

  constructor(private dataRealisationService: RealisationsDataService) {}

  ngOnInit(): void {
    this.realisations = this.dataRealisationService.getRealisations();
    this.filteredRealisations = this.realisations; // Initialisation
  }

  // Filtrer par ordre
  filterByOrder(order: string): void {
    if (order === 'recent') {
      this.filteredRealisations = [...this.realisations].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (order === 'ancien') {
      this.filteredRealisations = [...this.realisations].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
  }

  // Filtrer par catégorie
  filterByCategory(category: string): void {
    this.filteredRealisations = this.realisations.filter(realisation => realisation.categorie === category);
  }

  // Filtrer par date
  filterByDate(): void {
    if (this.dateDebut && this.dateFin) {
      const start = new Date(this.dateDebut).getTime();
      const end = new Date(this.dateFin).getTime();
      this.filteredRealisations = this.realisations.filter(realisation => {
        const realisationDate = new Date(realisation.date).getTime();
        return realisationDate >= start && realisationDate <= end;
      });
    }
  }

  // Filtrer par recherche
  filterBySearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredRealisations = this.realisations.filter(realisation =>
      realisation.titre.toLowerCase().includes(term) || realisation.description.toLowerCase().includes(term)
    );
  }


}
