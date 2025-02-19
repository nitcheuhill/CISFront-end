// hello-banner.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { AuthService } from '../../../shared/sevices/auth.service';
import localeFr from '@angular/common/locales/fr';

// Enregistrement de la locale française
registerLocaleData(localeFr, 'fr-FR');

@Component({
  selector: 'app-hello-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="greeting-container">
      <h1 class="greeting-title">Hello, {{currentUser.prenom + ' ' + currentUser.nom }} !!</h1>
      <div class="current-date">{{ today | date:'EEEE d MMMM yyyy':'':'fr-FR' }}</div>
    </div>
  `,
  styles: [`
    .greeting-container {
      font-family: Arial, sans-serif;
      padding: 10px;
      line-height :1.5 ;
    }
    
    .greeting-title {
      color: rgba(17, 110, 182, 1);
      font-size: 24px;
      font-weight: bold;
      margin: 0;
    }
    
    .current-date {
      color: rgba(169, 169, 169, 1);
      font-size: 14px;
    }
  `],
  providers: [DatePipe]
})
export class HelloBannerComponent implements OnInit {
  today = new Date();
  currentUser: any;
  
  constructor(
    private authService: AuthService,
    private datePipe: DatePipe
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit() {
    // La date est maintenant directement utilisée dans le template avec la pipe
  }
}