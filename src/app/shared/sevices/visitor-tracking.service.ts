import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface VisitorData {
  date: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackingService {
  private readonly STORAGE_KEY = 'visitor_tracking';
  private readonly TOTAL_VISITORS_KEY = 'total_unique_visitors';
  private visitorsSubject = new BehaviorSubject<VisitorData[]>([]);
  private totalVisitorsSubject = new BehaviorSubject<number>(0);
  
  constructor() {
    this.loadVisitorData();
    this.trackVisit();
  }

  private loadVisitorData() {
    // Charger les données de visite quotidiennes
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.visitorsSubject.next(JSON.parse(stored));
    }
    
    // Charger le nombre total de visiteurs uniques
    const totalVisitors = localStorage.getItem(this.TOTAL_VISITORS_KEY);
    if (totalVisitors) {
      this.totalVisitorsSubject.next(parseInt(totalVisitors, 10));
    }
  }

  private trackVisit() {
    const today = new Date().toISOString().split('T')[0];
    const visitorId = this.getOrCreateVisitorId();
    const data = this.visitorsSubject.value;
    let isNewVisitor = false;
    
    // Vérifier si c'est un nouveau visiteur en général
    const allVisitors = JSON.parse(localStorage.getItem('all_visitors') || '[]');
    if (!allVisitors.includes(visitorId)) {
      allVisitors.push(visitorId);
      localStorage.setItem('all_visitors', JSON.stringify(allVisitors));
      
      // Incrémenter le nombre total de visiteurs uniques
      const currentTotal = this.totalVisitorsSubject.value;
      this.totalVisitorsSubject.next(currentTotal + 1);
      localStorage.setItem(this.TOTAL_VISITORS_KEY, (currentTotal + 1).toString());
      
      isNewVisitor = true;
    }
    
    // Mettre à jour les statistiques quotidiennes
    const todayData = data.find(d => d.date === today);
    if (!todayData) {
      // Premier visiteur de la journée
      data.push({ date: today, count: 1 });
    } else if (!this.hasVisitedToday(visitorId)) {
      // Nouveau visiteur pour aujourd'hui
      todayData.count++;
    }

    this.saveVisitorData(data);
    this.markVisitForToday(visitorId);
  }

  private getOrCreateVisitorId(): string {
    let visitorId = localStorage.getItem('visitor_id');
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem('visitor_id', visitorId);
    }
    return visitorId;
  }

  private hasVisitedToday(visitorId: string): boolean {
    const today = new Date().toISOString().split('T')[0];
    const visits = JSON.parse(localStorage.getItem(`visits_${visitorId}`) || '[]');
    return visits.includes(today);
  }

  private markVisitForToday(visitorId: string) {
    const today = new Date().toISOString().split('T')[0];
    const visits = JSON.parse(localStorage.getItem(`visits_${visitorId}`) || '[]');
    if (!visits.includes(today)) {
      visits.push(today);
      localStorage.setItem(`visits_${visitorId}`, JSON.stringify(visits));
    }
  }

  private saveVisitorData(data: VisitorData[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    this.visitorsSubject.next(data);
  }

  getVisitorData(): Observable<VisitorData[]> {
    return this.visitorsSubject.asObservable();
  }
  
  getTotalVisitors(): Observable<number> {
    return this.totalVisitorsSubject.asObservable();
  }

  getFilteredData(period: 'annual' | 'monthly' | 'weekly'): VisitorData[] {
    const now = new Date();
    const data = [...this.visitorsSubject.value]; // Créer une copie pour éviter les mutations
    
    switch (period) {
      case 'weekly':
        const weekStart = new Date();
        weekStart.setDate(now.getDate() - 7);
        return this.getFilteredDataByDateRange(data, weekStart, now);
      
      case 'monthly':
        const monthStart = new Date();
        monthStart.setMonth(now.getMonth() - 1);
        return this.getFilteredDataByDateRange(data, monthStart, now);
      
      case 'annual':
        const yearStart = new Date();
        yearStart.setFullYear(now.getFullYear() - 1);
        return this.getFilteredDataByDateRange(data, yearStart, now);
      
      default:
        return data;
    }
  }
  
  private getFilteredDataByDateRange(data: VisitorData[], startDate: Date, endDate: Date): VisitorData[] {
    // S'assurer que les dates sont à minuit pour une comparaison correcte
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);
    
    // Filtrer les données dans la plage de dates
    return data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  }
}