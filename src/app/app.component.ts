import { RouterModule , Router,NavigationStart, NavigationEnd} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoaderService } from './shared/sevices/loader.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AuthService } from './shared/sevices/auth.service';
import { NavbarbackofficeComponent } from './shared/components/navbarbackoffice/navbarbackoffice.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { VisitorTrackingService } from './shared/sevices/visitor-tracking.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterModule,NavbarComponent,CommonModule,LoaderComponent,FooterComponent, NavbarbackofficeComponent,ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLoading$;
  isBackOffice = false;

  constructor(
    private router: Router, 
    private loaderService: LoaderService,
    private authService: AuthService,
    private visitorTrackingService: VisitorTrackingService
  ) {
    this.isLoading$ = this.loaderService.isLoading;
    
    // Utilisez NavigationEnd pour la détection du backoffice
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isBackOffice = event.url.startsWith('/back-office');
      
      // Gestion du loader
      setTimeout(() => this.loaderService.hideLoader(), 1000);
      window.scrollTo(0, 0);
    });

    // Gestion séparée pour NavigationStart
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.loaderService.showLoader();
    });
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn() && this.router.url.includes('/dashboard')) {
      this.router.navigate(['/login']);
    }
    this.loaderService.showLoader();
  }
}