import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, getDocs, doc, query, where ,deleteDoc} from '@angular/fire/firestore';

export interface Testimonial {
  id?: string;
  name: string;
  email: string;
  profession?: string;
  description: string;
  image?: string;
  isActive: boolean;
  isValidated?: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialPushDataService {
  private readonly firestore = inject(Firestore);

  constructor() {}

 async addTestimonial(testimonialData: Omit<Testimonial, 'isActive' | 'createdAt'>): Promise<string> {
    try {
      const testimonialsCollection = collection(this.firestore, 'testimonials');
      
      const testimonialToAdd: Testimonial = {
        ...testimonialData,
        isActive: false,
        createdAt: new Date()
      };

      const docRef = await addDoc(testimonialsCollection, testimonialToAdd);
      return docRef.id;
    } catch (error) {
      console.error("Erreur lors de l'ajout du témoignage:", error);
      throw error;
    }
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    try {
      const testimonialsCollection = collection(this.firestore, 'testimonials');
      const q = query(testimonialsCollection, where('isActive', '==', true));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as unknown as Testimonial));
    } catch (error) {
      console.error("Erreur lors de la récupération des témoignages:", error);
      throw error;
    }
  }

  async updateTestimonialStatus(testimonialId: string, isActive: boolean): Promise<void> {
    try {
      const testimonialRef = doc(this.firestore, 'testimonials', testimonialId);
      await updateDoc(testimonialRef, { isActive });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut du témoignage:", error);
      throw error;
    }
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    try {
      const testimonialsCollection = collection(this.firestore, 'testimonials');
      const querySnapshot = await getDocs(testimonialsCollection);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data['createdAt']?.toDate()
        } as Testimonial;
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des témoignages:", error);
      throw error;
    }
  }
  
  async deleteTestimonial(testimonialId: string): Promise<void> {
    try {
      const testimonialRef = doc(this.firestore, 'testimonials', testimonialId);
      await deleteDoc(testimonialRef);
    } catch (error) {
      console.error("Erreur lors de la suppression du témoignage:", error);
      throw error;
    }
  }
  async updateTestimonialValidation(testimonialId: string, isValidated: boolean): Promise<void> {
    try {
      const testimonialRef = doc(this.firestore, 'testimonials', testimonialId);
      await updateDoc(testimonialRef, { isValidated });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la validation:", error);
      throw error;
    }
  }
  
}
