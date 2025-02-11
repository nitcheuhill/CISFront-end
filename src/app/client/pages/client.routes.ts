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
    {
      path: 'article/:title',
      loadComponent: () => import('./articles-details/articles-details.component').then(m => m.ArticlesDetailsComponent) // Route pour le composant ServiceDetails
    },
    {
      path: 'realisation/:title',
      loadComponent: () => import('./realisation-page/realisation-page.component').then(m => m.RealisationPageComponent) // Route pour le composant ServiceDetails
    },
    {
      path: 'realisations',
      loadComponent: () => import('./realisations-page/realisations-page.component').then(m => m.RealisationsPageComponent) // Route pour le composant realisation
    },
    {
      path: 'faq',
      loadComponent: () => import('./faq-page/faq-page.component').then(m => m.FaqPageComponent) // Route pour le composant realisation
    },
    {
      path: 'inspection',
      loadComponent: () => import('./request-inspection/request-inspection.component').then(m => m.RequestInspectionComponent) // Route pour le composant de demande de dévis
    },
    {
      path: 'articles',
      loadComponent: () => import('./article-page/article-page.component').then(m => m.ArticlePageComponent) // Route pour le composant de demande de dévis
    },
    {
      path: 'login',
      loadComponent: () => import('./login-page/login-page.component').then(m => m.LoginPageComponent) // Route pour le composant de demande de dévis
    },
];
