import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideInOut', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms ease-in-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isVisible: boolean = true;
  lastScrollTop: number = 0;
  isMenuOpen: boolean = false;
  isMobileMenuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (this.isMobileMenuOpen || this.isMenuOpen) {
      this.closeAllMenus();
    }
    
    if (scrollTop > this.lastScrollTop) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:click', ['$event'])
  onClick(event: Event) {
    if (!this.isMobile() && this.isMenuOpen) {
      const navbar = document.querySelector('.navbar');
      const clickedInside = navbar?.contains(event.target as Node);
      if (!clickedInside) {
        this.closeMenu();
      }
    }
  }

  validRoutes = ['/', '/nos-services', '/contacts', '/a-propos'];

  constructor(private router: Router) {}

  isCurrentPageValid(): boolean {
    return this.validRoutes.includes(this.router.url);
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  handleMenuClick(event: Event) {
    event.stopPropagation();
    if (this.isMobile()) {
      this.toggleMobileMenu();
    } else {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  closeAllMenus() {
    this.isMenuOpen = false;
    this.closeMobileMenu();
  }
}