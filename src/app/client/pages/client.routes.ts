import { Routes } from '@angular/router';


export const routes: Routes = [
    {
      path: '', 
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
      path: 'a-propos',
      loadComponent: () => import('./about-page/about-page.component').then(m => m.AboutPageComponent) // Route pour le composant AboutPage
    },
    {
      path: 'contacts',
      loadComponent: () => import('./contact-page/contact-page.component').then(m => m.ContactPageComponent) // Route pour le composant AboutPage
    },
    {
      path: 'nos-services',
      loadComponent: () => import('./services-page/services-page.component').then(m => m.ServicesPageComponent) // Route pour le composant ServicesPage
    },
    {
      path: 'service/:title',
      loadComponent: () => import('./service-details/service-details.component').then(m => m.ServiceDetailsComponent) // Route pour le composant ServiceDetails
    },
];
