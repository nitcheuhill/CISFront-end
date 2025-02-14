// quote-request.service.ts
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, getDocs, doc, query, where, deleteDoc } from '@angular/fire/firestore';

export interface QuoteRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  services: string[];
  countryCode: string;
  isProcessed: boolean;
  status: 'pending' | 'contacted' | 'completed' | 'cancelled';
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  private readonly firestore = inject(Firestore);

  constructor() {}

  async addQuoteRequest(quoteData: Omit<QuoteRequest, 'isProcessed' | 'status' | 'createdAt'>): Promise<string> {
    try {
      const quotesCollection = collection(this.firestore, 'quotes');
      
      const quoteToAdd: QuoteRequest = {
        ...quoteData,
        isProcessed: false,
        status: 'pending',
        createdAt: new Date()
      };

      const docRef = await addDoc(quotesCollection, quoteToAdd);
      return docRef.id;
    } catch (error) {
      console.error("Erreur lors de l'ajout du devis:", error);
      throw error;
    }
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    try {
      const quotesCollection = collection(this.firestore, 'quotes');
      const querySnapshot = await getDocs(quotesCollection);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data['createdAt']?.toDate()
        } as QuoteRequest;
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des devis:", error);
      throw error;
    }
  }

  async getPendingQuoteRequests(): Promise<QuoteRequest[]> {
    try {
      const quotesCollection = collection(this.firestore, 'quotes');
      const q = query(quotesCollection, where('status', '==', 'pending'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as unknown as QuoteRequest));
    } catch (error) {
      console.error("Erreur lors de la récupération des devis en attente:", error);
      throw error;
    }
  }

  async updateQuoteStatus(quoteId: string, status: QuoteRequest['status']): Promise<void> {
    try {
      const quoteRef = doc(this.firestore, 'quotes', quoteId);
      await updateDoc(quoteRef, { 
        status,
        isProcessed: status !== 'pending'
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut du devis:", error);
      throw error;
    }
  }

  async deleteQuoteRequest(quoteId: string): Promise<void> {
    try {
      const quoteRef = doc(this.firestore, 'quotes', quoteId);
      await deleteDoc(quoteRef);
    } catch (error) {
      console.error("Erreur lors de la suppression du devis:", error);
      throw error;
    }
  }

  async updateQuoteRequestDetails(quoteId: string, updates: Partial<QuoteRequest>): Promise<void> {
    try {
      const quoteRef = doc(this.firestore, 'quotes', quoteId);
      await updateDoc(quoteRef, updates);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du devis:", error);
      throw error;
    }
  }
}