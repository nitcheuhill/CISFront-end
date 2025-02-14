import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../core/guards/auth.guard';
import { Routes } from '@angular/router';
import { LoginPageComponent } from '../../client/pages/login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TestimonialspageComponent } from './testimonialspage/testimonialspage.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [authGuard],
      },
    {
        path: 'admin',
        component: AdminPageComponent,
        // canActivate: [authGuard],
      },
    {
        path: 'testimonial',
        component: TestimonialspageComponent,
        // canActivate: [authGuard],
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },

];
