// src/app/core/services/toast.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);
  private nextId = 1;

  get toasts$() {
    return this.toasts.asObservable();
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const id = this.nextId++;
    const toast: Toast = { message, type, id };
    
    this.toasts.next([...this.toasts.value, toast]);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
      this.remove(id);
    }, 3000);
  }

  private remove(id: number) {
    const currentToasts = this.toasts.value;
    this.toasts.next(currentToasts.filter(toast => toast.id !== id));
  }
}