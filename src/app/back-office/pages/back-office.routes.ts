import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../core/guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent, 
        canActivate: [authGuard], 
      },
];
