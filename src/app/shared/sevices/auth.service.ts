// src/app/core/services/auth.service.ts
import { Injectable, inject, NgZone } from '@angular/core';
import { Firestore, collection, doc, getDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = inject(Firestore);
  private router = inject(Router);
  private ngZone = inject(NgZone);

  login(email: string, password: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      try {
        const usersCollection = collection(this.firestore, 'users');
        const q = query(
          usersCollection,
          where('email', '==', email),
          where('password', '==', password)
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          sessionStorage.setItem('user', JSON.stringify(userData));
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (error) {
        console.error("Erreur d'authentification:", error);
        resolve(false);
      }
    });
  }


  // login(email: string, password: string): Promise<boolean> {
  //   return new Promise(async (resolve) => {
  //     try {
  //       const usersCollection = collection(this.firestore, "users");

  //       // Création du nouvel utilisateur
  //       const newUser = {
  //         email: email,
  //         password: password, // ⚠️ Il est conseillé de hacher le mot de passe avant de l'enregistrer !
  //         name: name,
  //         createdAt: new Date(),
  //       };

  //       // Ajout du document à Firestore
  //       const docRef = await addDoc(usersCollection, newUser);

  //       alert("Utilisateur ajouté avec succès, ID:" + docRef.id);
  //       return true;
  //     } catch (error) {
  //       alert("Erreur lors de l'ajout de l'utilisateur:" + error);
  //       return false;
  //     }

  //   });
  // }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  logout(): void {
    this.ngZone.run(() => {
      sessionStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }
}
