import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, query, where, serverTimestamp } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface VisitorData {
  date: string;
  count: number;
}

interface Visit {
  browserId: string;
  timestamp: any;
  source: string;
  referrer: string;
  pathname: string;
  domain: string;
  fullUrl: string;
  environment: string;
}

interface EnvironmentConfig {
  domain: string;
  baseUrl: string;
  environment: 'local' | 'staging' | 'production';
}

interface FilterParams {
  period: 'annual' | 'monthly' | 'weekly';
  selectedMonth?: number;
  selectedDay?: number;
  selectedDayOfMonth?: number;
}

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackingService {
  private readonly firestore = inject(Firestore);
  private readonly router = inject(Router);
  private visitorsSubject = new BehaviorSubject<VisitorData[]>([]);
  private totalVisitorsSubject = new BehaviorSubject<number>(0);
  private readonly BROWSER_ID_KEY = 'browser_id';
  
  private readonly envConfig: EnvironmentConfig = {
    domain: environment.visitorTracking?.domain || window.location.hostname,
    baseUrl: environment.visitorTracking?.baseUrl || window.location.origin,
    environment: (environment.visitorTracking?.environment || 'production') as 'local' | 'staging' | 'production'
  };
  
  constructor() {
    this.initializeTracking();
    this.trackRouteChanges();
  }

  private trackRouteChanges() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.trackVisit(event.url);
    });
  }

  private async initializeTracking() {
    await this.loadVisitorData();
    await this.trackVisit(window.location.pathname);
  }

  private getBrowserId(): string {
    const browserIdKey = `${this.BROWSER_ID_KEY}_${this.envConfig.environment}`;
    let browserId = localStorage.getItem(browserIdKey);
    if (!browserId) {
      browserId = crypto.randomUUID();
      localStorage.setItem(browserIdKey, browserId);
    }
    return browserId;
  }

  private getTrafficSource(): { source: string, referrer: string } {
    const referrer = document.referrer;
    let source = 'Direct';

    if (referrer) {
      const referrerDomain = new URL(referrer).hostname;
      
      if (referrerDomain === this.envConfig.domain) {
        return { source: 'Internal', referrer };
      }

      if (referrer.includes('google')) source = 'Google';
      else if (referrer.includes('yahoo')) source = 'Yahoo';
      else if (referrer.includes('bing')) source = 'Bing';
      else if (referrer.includes('duckduckgo')) source = 'DuckDuckGo';
      else source = 'Other';
    }

    return { source, referrer };
  }

  private async trackVisit(currentPath: string) {
    const today = new Date().toISOString().split('T')[0];
    const browserId = this.getBrowserId();
    const { source, referrer } = this.getTrafficSource(); 
    const fullUrl = `${this.envConfig.baseUrl}${currentPath}`;
    
    try {
      const visitsRef = collection(this.firestore, 'visitors');
      const todayQuery = query(
        visitsRef,
        where('date', '==', today),
        where('browserId', '==', browserId),
        where('domain', '==', this.envConfig.domain),
        where('environment', '==', this.envConfig.environment)
      );
      
      const querySnapshot = await getDocs(todayQuery);
      
      if (querySnapshot.empty) {
        const visit: Visit = {
          browserId,
          source,
          referrer,
          pathname: currentPath,
          domain: this.envConfig.domain,
          fullUrl,
          environment: this.envConfig.environment,
          timestamp: serverTimestamp()
        };
        
        await addDoc(visitsRef, {
          ...visit,
          date: today
        });
        
        await this.loadVisitorData();
      }
    } catch (error) {
      console.error('Erreur lors du tracking de la visite:', error);
    }
  }

  private async loadVisitorData() {
    try {
      const visitsRef = collection(this.firestore, 'visitors');
      const domainQuery = query(
        visitsRef,
        where('domain', '==', this.envConfig.domain),
        where('environment', '==', this.envConfig.environment)
      );
      
      const querySnapshot = await getDocs(domainQuery);
      
      const visitorsByDate = new Map<string, number>();
      
      querySnapshot.forEach(doc => {
        const data = doc.data();
        const date = data['date'];
        visitorsByDate.set(date, (visitorsByDate.get(date) || 0) + 1);
      });
      
      const visitorData: VisitorData[] = Array.from(visitorsByDate.entries())
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => a.date.localeCompare(b.date));
      
      this.visitorsSubject.next(visitorData);
      this.totalVisitorsSubject.next(querySnapshot.size);
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    }
  }

  getVisitorData(): Observable<VisitorData[]> {
    return this.visitorsSubject.asObservable();
  }

  getTotalVisitors(): Observable<number> {
    return this.totalVisitorsSubject.asObservable();
  }

  getFilteredData(filters: FilterParams): VisitorData[] {
    return [...this.visitorsSubject.value].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  getPointValue(date: string): number {
    const data = this.visitorsSubject.value;
    const point = data.find(item => item.date === date);
    return point ? point.count : 0;
  }

  getSelectedDateValue(filters: FilterParams): string | null {
    const now = new Date();
    let selectedDate: Date | null = null;

    switch (filters.period) {
      case 'weekly':
        if (filters.selectedDay !== undefined) {
          selectedDate = this.getDateForWeekday(filters.selectedDay);
        }
        break;
      
      case 'monthly':
        if (filters.selectedDayOfMonth !== undefined) {
          selectedDate = new Date(now.getFullYear(), now.getMonth(), filters.selectedDayOfMonth);
        }
        break;
      
      case 'annual':
        if (filters.selectedMonth !== undefined) {
          selectedDate = new Date(now.getFullYear(), filters.selectedMonth, 1);
        }
        break;
    }

    return selectedDate ? selectedDate.toISOString().split('T')[0] : null;
  }

  private getDateForWeekday(weekday: number): Date {
    const now = new Date();
    const currentDay = now.getDay();
    const distance = weekday - (currentDay === 0 ? 6 : currentDay - 1);
    const date = new Date(now);
    date.setDate(date.getDate() + distance);
    return date;
  }

  getEnvironmentConfig(): EnvironmentConfig {
    return this.envConfig;
  }
}