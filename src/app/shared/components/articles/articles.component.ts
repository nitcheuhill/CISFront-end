import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../sevices/articles.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  infoarticles: any[] = [];
  constructor(private dataArticleService : ArticlesService,private router: Router ){}

  ngOnInit(): void {
    this.infoarticles = this.dataArticleService.getArticles();
    console.log('Services récupérés :', this.infoarticles);
  }

    // route sur le details article
    onArticleClick(article: any): void {
      this.router.navigate(['/article', article.title]);
    }  
    
}
