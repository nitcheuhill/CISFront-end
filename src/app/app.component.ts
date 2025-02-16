import { RouterModule , Router,NavigationStart, NavigationEnd} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoaderService } from './shared/sevices/loader.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import Lenis from '@studio-freight/lenis';

import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,NavbarComponent,CommonModule,LoaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isLoading$;

  constructor(private router: Router, private loaderService: LoaderService) {
    this.isLoading$ = this.loaderService.isLoading;
  }

  ngOnInit() 
  {

    const lenis = new Lenis();
    lenis.on('scroll', ($e: any) => {
      // console.log($e);
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      //this.addAnimation();
    }
    // Afficher le loader pendant le chargement initial
    this.loaderService.showLoader();

    // Gérer l'affichage du loader lors du changement de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.showLoader();
      } else if (event instanceof NavigationEnd) {
        // Délai pour garantir le chargement complet de la page
        setTimeout(() => this.loaderService.hideLoader(), 500);
        //scrolle sur le haut de page
        window.scrollTo(0, 0); 

      }
    });
  };

  
}
