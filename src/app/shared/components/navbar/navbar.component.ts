import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideInOut', [
      state('void', style({
        height: '0',
        opacity: 0,
        padding: '0 20px'
      })),
      state('*', style({
        height: '*',
        opacity: 1,
        padding: '80px 20px 20px'
      })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent {
  isVisible: boolean = true;
  lastScrollTop: number = 0;
  isMenuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Fermer le menu au scroll
    if (this.isMenuOpen) {
      this.closeMenu();
    }
    
    if (scrollTop > this.lastScrollTop) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  validRoutes = ['/', '/nos-services', '/contacts', '/a-propos'];

  constructor(private router: Router) {}

  isCurrentPageValid(): boolean {
    return this.validRoutes.includes(this.router.url);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}