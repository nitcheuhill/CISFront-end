// src/app/core/services/auth.service.ts
import { Injectable, inject, NgZone } from '@angular/core';
import { Firestore, collection, doc, getDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CryptoUtilsService } from './crypto-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = inject(Firestore);
  private router = inject(Router);
  private ngZone = inject(NgZone);
  private cryptoUtils = inject(CryptoUtilsService);

  async login(email: string, password: string): Promise<boolean> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const userQuery = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        
        // Vérifier le mot de passe hashé
        const isPasswordValid = await this.cryptoUtils.comparePasswords(
          password,
          userData['password']
        );

        if (isPasswordValid) {
          const user = {
            ...userData,
            id: userDoc.id
          };
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error("Erreur d'authentification:", error);
      return false;
    }
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  logout(): void {
    this.ngZone.run(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }
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


