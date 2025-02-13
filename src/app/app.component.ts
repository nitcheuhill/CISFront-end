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

@Component({
  selector: 'app-root',
  imports: [RouterModule,NavbarComponent,CommonModule,LoaderComponent,FooterComponent, NavbarbackofficeComponent,ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isLoading$;
  isBackOffice = false;

  constructor(private router: Router, private loaderService: LoaderService,private authService: AuthService) {
    this.isLoading$ = this.loaderService.isLoading;
    this.router.events.subscribe(() => {
      this.isBackOffice = this.router.url.startsWith('/back-office'); // Vérifie si on est sur le Backoffice
    });
  }

  ngOnInit() 
  {
    if (!this.authService.isLoggedIn() && this.router.url.includes('/dashboard')) {
      this.router.navigate(['/login']);
    }

    // Afficher le loader pendant le chargement initial
    this.loaderService.showLoader();

    // Gérer l'affichage du loader lors du changement de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.showLoader();
      } else if (event instanceof NavigationEnd) {
        // Délai pour garantir le chargement complet de la page
        setTimeout(() => this.loaderService.hideLoader(), 1000);
        //scrolle sur le haut de page
        window.scrollTo(0, 0); 

      }
    });
  };

  
}
