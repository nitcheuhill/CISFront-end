import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, getDocs, doc, query, where, deleteDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';
import { ToastService } from './toast.service';
import { CryptoUtilsService } from './crypto-utils.service';

export interface User {
  id?: string;
  email: string;
  prenom: string;
  nom: string;
  password: string;
  statut: string;
  photo?: string;
  creationArticle: boolean;
  creationRealisation: boolean;
  modificationArticle: boolean;
  modificationRealisation: boolean;
  gestionDevis: boolean;
  gestionTemoignage: boolean;
  isActivated: boolean;
  createdAt: Date;
}


@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
  private readonly firestore = inject(Firestore);
  private readonly storage = inject(Storage);

  constructor( private cryptoUtils: CryptoUtilsService,
    private toastService: ToastService) {}

  private async uploadPhoto(photoData: string): Promise<string> {
    try {
      const timestamp = new Date().getTime();
      const storageRef = ref(this.storage, `users/${timestamp}`);
      const base64Data = photoData.split(',')[1];
      await uploadString(storageRef, base64Data, 'base64');
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.error("Erreur lors de l'upload de la photo:", error);
      throw error;
    }
  }

  async addUser(userData: Omit<User, 'isActivated' | 'createdAt'>): Promise<string> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      
      let photoUrl = '';
      if (userData.photo) {
        photoUrl = await this.uploadPhoto(userData.photo);
      }
      // Chiffrer le mot de passe
      const hashedPassword = await this.cryptoUtils.hashPassword(userData.password);
      
      const userToAdd: User = {
        ...userData,
        password: hashedPassword, 
        photo: photoUrl,
        isActivated: true, // Par défaut, nous activons l'utilisateur
        createdAt: new Date()
      };

      const docRef = await addDoc(usersCollection, userToAdd);
      this.toastService.show("Utilisateur ajouté avec succès", 'success');
      return docRef.id;
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", error);
      throw error;
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const querySnapshot = await getDocs(usersCollection);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data['createdAt']?.toDate()
        } as User;
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
      this.toastService.show("Erreur lors de la récupération des utilisateurs", 'error');
      throw error;
    }
  }

  async updateUser(userId: string, userData: Partial<User>): Promise<void> {
    try {
      const userRef = doc(this.firestore, 'users', userId);
      
      // Si une nouvelle photo est fournie, nous la téléchargeons
      if (userData.photo && userData.photo.startsWith('data:image')) {
        userData.photo = await this.uploadPhoto(userData.photo);
      }
      
      await updateDoc(userRef, userData);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
      this.toastService.show("Erreur lors de la récupération des utilisateurs", 'error');
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const userRef = doc(this.firestore, 'users', userId);
      await deleteDoc(userRef);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
      this.toastService.show("Erreur lors de la récupération des utilisateurs", 'error');
      throw error;
    }
  }

  async updateUserActivation(userId: string, isActivated: boolean): Promise<void> {
    try {
      const userRef = doc(this.firestore, 'users', userId);
      await updateDoc(userRef, { isActivated });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'activation:", error);
      this.toastService.show("Erreur lors de la récupération des utilisateurs", 'error');
      throw error;
    }
  }

  async getActiveUsers(): Promise<User[]> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const q = query(usersCollection, where('isActivated', '==', true));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as User));
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs actifs:", error);
      this.toastService.show("Erreur lors de la récupération des utilisateurs", 'error');
      throw error;
    }
  }
}