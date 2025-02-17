// navbarbackoffice.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/sevices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarbackoffice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbarbackoffice.component.html',
  styleUrl: './navbarbackoffice.component.scss'
})
export class NavbarbackofficeComponent {
  currentUser: any;
  constructor(private authService: AuthService,private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  }
  isExpanded = false;
  isTouchScreen: boolean = false;

  ngOnInit() {
    this.isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  toggleExpand(state: boolean) {
  if (!this.isTouchScreen) {
    this.isExpanded = state;
  }
}
toggleExpandTouch() {
  if (this.isTouchScreen) {
    this.isExpanded = !this.isExpanded;
  }
}

  getTruncatedEmail(email: string): string {
    const limit = this.isExpanded ? email.length : 10;
    return email.substring(0, limit) + (email.length > limit ? '...' : '');
  }
  logout(): void {
    this.authService.logout();
  }


  get showAdminMenu(): boolean {
    return this.currentUser?.statut === 'administrateur';
  }

  get showRealisationsMenu(): boolean {
    return !['editeur'].includes(this.currentUser?.statut);
  }

  get showArticlesMenu(): boolean {
    return !['realisateur', 'inspecteur'].includes(this.currentUser?.statut);
  }

  get showDevisMenu(): boolean {
    return !['editeur', 'realisateur'].includes(this.currentUser?.statut);
  }

  get showTemoignagesMenu(): boolean {
    return !['editeur', 'realisateur', 'inspecteur'].includes(this.currentUser?.statut);
  }
}