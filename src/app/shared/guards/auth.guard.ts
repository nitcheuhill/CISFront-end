// src/app/core/guards/auth.guard.ts
import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private router = inject(Router);

  canActivate(): boolean {
    if (sessionStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
