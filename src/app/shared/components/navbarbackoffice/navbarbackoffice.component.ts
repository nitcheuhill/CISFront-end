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
  constructor(private authService: AuthService) {}
  isExpanded = false;

  toggleExpand(state: boolean) {
    this.isExpanded = state;
  }

  getTruncatedEmail(email: string): string {
    const limit = this.isExpanded ? email.length : 10;
    return email.substring(0, limit) + (email.length > limit ? '...' : '');
  }
  logout(): void {
    this.authService.logout();
  }
}