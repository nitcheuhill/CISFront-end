import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../core/guards/auth.guard';
import { Routes } from '@angular/router';
import { LoginPageComponent } from '../../client/pages/login-page/login-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
    {
        path: '',
        component: DashboardComponent, 
        // canActivate: [authGuard], 
      },
      { path: '**', redirectTo: 'login' },
];
