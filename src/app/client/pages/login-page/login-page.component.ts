import { Component , HostListener, inject} from '@angular/core';
import { AuthService } from '../../../shared/sevices/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';
@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule, NotAvailableComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  shouldShowNotAvailable = false;
  email = '';
  password = '';
  errorMessage = '';

  constructor() {}

  async onLogin() {
    const success = await this.authService.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/admin']); // Redirection vers le back-office
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.shouldShowNotAvailable = window.innerWidth <= 900;
  }

}
