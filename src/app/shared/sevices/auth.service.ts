// src/app/core/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = inject(Firestore);
  private router = inject(Router);

  async login(email: string, password: string): Promise<boolean> {
    const usersCollection = collection(this.firestore, 'users');
    const q = query(usersCollection, where('email', '==', email), where('password', '==', password)); 
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Utilisateur trouvé, stocker les informations dans sessionStorage
      const userData = querySnapshot.docs[0].data();
      sessionStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    
    return false;
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
