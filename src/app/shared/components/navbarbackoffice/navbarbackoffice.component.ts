import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbarbackoffice',
  imports: [CommonModule],
  templateUrl: './navbarbackoffice.component.html',
  styleUrl: './navbarbackoffice.component.scss'
})
export class NavbarbackofficeComponent implements OnInit {
  isExpanded = false;
  menuItems = [
    { label: 'Accueil', icon: '/images/AdminPageAssets/home.svg', active: false, path: '' },
    { label: 'Admins', icon: '/images/AdminPageAssets/user-octagon.svg', active: false, path: '/admins' },
    { label: 'Reporting', icon: '/images/AdminPageAssets/presention-chart.svg', active: false, path: '/reporting' },
    { label: 'Articles', icon: '/images/AdminPageAssets/edit-2.svg', active: false, path: '/articles' },
    { label: 'Réalisations', icon: '/images/AdminPageAssets/note-add.svg', active: false, path: '/realisations' },
    { label: 'Devis', icon: '/images/AdminPageAssets/document-text.svg', active: false, path: '/devis' },
    { label: 'Témoignages', icon: '/images/AdminPageAssets/messages-3.svg', active: false, path: '/temoignages' },
    { label: 'Historiques', icon: '/images/AdminPageAssets/stickynote.svg', active: false, path: '/historiques' },
    { label: 'Paramètres', icon: '/images/AdminPageAssets/category-2.svg', active: false, path: '/parametres' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Surveillez les changements de route pour activer le menu correct
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveMenu();
      }
    });

    // Mettez à jour le menu actif au démarrage
    this.updateActiveMenu();
  }

  toggleExpand(state: boolean) {
    this.isExpanded = state;
  }

  getTruncatedEmail(email: string): string {
    const limit = this.isExpanded ? email.length : 8;
    return email.substring(0, limit) + (email.length > limit ? '...' : '');
  }

  private updateActiveMenu() {
    const currentPath = this.router.url.split('?')[0]; // Ignore les query params
    this.menuItems.forEach(item => {
      item.active = currentPath === item.path;
    });
  }
}
