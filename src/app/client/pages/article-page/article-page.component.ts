import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from '../../../shared/sevices/articles.service';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NewsLetterComponent } from '../../../shared/components/news-letter/news-letter.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-page',
  imports: [CommonModule, LoaderComponent, FormsModule, NewsLetterComponent, RouterModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  mainArticle: any;
  otherArticles: any[] = [];
  displayedArticles: any[] = [];
  isLoading: boolean = false;  // Indicateur pour gérer l'affichage du loader
  currentLimit: number = 4;
  noDataFound: boolean = false;  // Variable pour savoir s'il n'y a pas de données
  noDataImage: string = '/images/assetsArticles/9264885.jpg';
  isFilterSliderOpen: boolean = false; // État du slider
  isMobileView: boolean = false; 
  // Filtres
  searchTerm: string = '';
  category: string = '';
  startDate: string = '';
  endDate: string = '';
  order: string = 'relevant';
  categories: string[] = ['Maintenance', 'Equipements', 'Energie', 'Climatisation', 'Production', 'Infrastructure'];
  isFiltered: boolean = false;  // Indicateur pour savoir si un filtre est appliqué

  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.loadArticles();
    this.checkView();
    window.addEventListener('resize', () => this.checkView());
  
  }

   // Méthode pour vérifier la taille de l'écran
   checkView(): void {
    this.isMobileView = window.innerWidth <= 1300; // Ajustez la valeur selon vos besoins
  }
  // route sur le details article
  onArticleClick(article: any): void {
    this.router.navigate(['/article', article.title]);
  }

  loadArticles(): void {
    this.isLoading = true;
    const articles = this.articleService.getArticles();

    console.log('Tous les articles:', articles);
    console.log('Article id 8:', articles.find(a => a.id === 8));

    const sortedArticles = articles.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    console.log('Articles triés:', sortedArticles);

    this.mainArticle = sortedArticles[0];
    this.otherArticles = sortedArticles.slice(1);
    this.updateDisplayedArticles();
  }

  // Méthode pour ouvrir/fermer le slider
  toggleFilterSlider(): void {
    this.isFilterSliderOpen = !this.isFilterSliderOpen;
  }
  updateDisplayedArticles() {
    this.isLoading = true;
    this.noDataFound = false;

    setTimeout(() => {
      let filteredArticles = this.filterArticles(this.otherArticles);

      if (filteredArticles.length > 0) {
        this.mainArticle = filteredArticles[0];
        this.displayedArticles = filteredArticles.slice(1);
        this.noDataFound = false;
      } else {
        this.mainArticle = null;
        this.displayedArticles = [];
        this.noDataFound = true;
      }

      this.isLoading = false;
    }, 500);
  }

  filterArticles(articles: any[]): any[] {
    return articles
      .filter(article => {
        const matchSearch = !this.searchTerm ||
          article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(this.searchTerm.toLowerCase());

        const matchCategory = !this.category || article.type === this.category;

        const matchDate =
          (!this.startDate || new Date(article.date) >= new Date(this.startDate)) &&
          (!this.endDate || new Date(article.date) <= new Date(this.endDate));

        return matchSearch && matchCategory && matchDate;
      })
      .sort((a, b) => {
        return this.order === 'newest'
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : a.title.localeCompare(b.title);
      })
      .slice(0, this.currentLimit);
  }

  searchArticles() {
    this.isFiltered = true;
    this.updateDisplayedArticles();
  }

  toggleArticles() {
    this.currentLimit = this.currentLimit >= this.otherArticles.length
      ? 4
      : this.currentLimit + 4;
    this.updateDisplayedArticles();
  }

  onCategoryChange(category: string): void {
    this.category = category;
    this.isFiltered = true;
    this.updateDisplayedArticles();
  }

  onOrderChange(order: string): void {
    this.order = order;
    this.isFiltered = true;

    this.otherArticles.sort((a, b) =>
      order === 'newest'
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : a.title.localeCompare(b.title)
    );

    this.updateDisplayedArticles();
  }

  resetAllFilters(): void {
    this.searchTerm = '';
    this.category = '';
    this.startDate = '';
    this.endDate = '';
    this.order = 'relevant';
    this.isFiltered = false;
    this.currentLimit = 4;
    this.loadArticles();
  }
}