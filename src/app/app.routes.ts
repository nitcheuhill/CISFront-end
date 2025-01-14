import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () =>
        import('./client/pages/client.routes').then((m) => m.routes), // Partie client
    },
    {
      path: 'back-office',
      loadChildren: () =>
        import('./back-office/pages/back-office.routes').then((m) => m.routes), // Partie back-office
    },
    {
      path: '**',
      redirectTo: '', // Redirection par défaut vers la partie client
    },
  ];
