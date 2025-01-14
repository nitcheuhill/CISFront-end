import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Exemple avec méthode asynchrone (facultatif)
  const isAuthenticated = await authService.isAuthenticated();

  if (isAuthenticated) {
    return true;
  }
  console.warn('Utilisateur non authentifié. Redirection vers /login.');
  await router.navigate(['/login']); // Route dédiée pour les non authentifiés
  return false;
};
