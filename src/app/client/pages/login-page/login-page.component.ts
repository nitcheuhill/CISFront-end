import { Component , HostListener, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/sevices/auth.service';
import { Router  } from '@angular/router';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';
@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule, NotAvailableComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  shouldShowNotAvailable = false;
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}



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
  async onSubmit() {
    this.errorMessage = '';
    const isLoggedIn = await this.authService.login(this.email, this.password);
    console.log('isLoggedIn' + isLoggedIn);
    if (isLoggedIn) {
      alert('salut');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
    }
  }

}
