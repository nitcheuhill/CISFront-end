import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';
import { FormsModule } from '@angular/forms';
import { VisitorTrackingService } from '../../../shared/sevices/visitor-tracking.service';
import { Subscription } from 'rxjs';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);
type PeriodType = 'annual' | 'monthly' | 'weekly';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [NotAvailableComponent, CommonModule, FormsModule],
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit, OnDestroy {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;
  
  private chart: Chart | null = null;
  private subscription: Subscription | null = null;
  // Assurez-vous de déclarer ces propriétés
private dataSubscription: Subscription | null = null;
private totalSubscription: Subscription | null = null;

  totalVisitors: number = 0;
  selectedPeriod: PeriodType = 'annual';
  selectedMonth: number = new Date().getMonth();
  selectedDay: number = new Date().getDay();
  selectedDayOfMonth: number = new Date().getDate();
  
  periods: { value: PeriodType; label: string }[] = [
    { value: 'annual', label: 'Annuel' },
    { value: 'monthly', label: 'Mensuel' },
    { value: 'weekly', label: 'Hebdomadaire' }
  ];

  months: string[] = [
    'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
  ];
  
  weekdays: string[] = [
    'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'
  ];
  
  years: number[] = Array.from({ length: 5 }, (_, i) => 2025 + i);
  
  shouldShowNotAvailable = false;
  
  constructor(private visitorService: VisitorTrackingService) {}
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    this.updateChart();
  }

  ngOnInit() {
    this.checkScreenSize();
     // Souscrire au service pour obtenir les données quotidiennes
  this.dataSubscription = this.visitorService.getVisitorData().subscribe(data => {
    this.updateChart();
  });
  
  // Souscrire au service pour obtenir le nombre total de visiteurs
  this.totalSubscription = this.visitorService.getTotalVisitors().subscribe(total => {
    this.totalVisitors = total;
  });
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe();
  this.totalSubscription?.unsubscribe();
  if (this.chart) {
    this.chart.destroy();
  }
  }

  changePeriod(period: PeriodType) {
    this.selectedPeriod = period;
    this.updateChart();
  }
  
  selectMonth(index: number) {
    this.selectedMonth = index;
    this.updateChart();
  }
  
  selectDay(index: number) {
    this.selectedDay = index;
    this.updateChart();
  }
  
  selectDayOfMonth(day: number) {
    this.selectedDayOfMonth = day;
    this.updateChart();
  }
  
  getDaysInMonth(): number[] {
    const year = new Date().getFullYear();
    const month = this.selectedMonth;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  private updateChart() {
    if (!this.chartCanvas) return;
    
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    const data = this.visitorService.getFilteredData(this.selectedPeriod);
    
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill.addColorStop(0, 'rgba(96, 158, 206, 1)');
    gradientFill.addColorStop(1, 'rgba(255, 255, 255, 1)');

    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: data.map(d => d.date),
        datasets: [{
          label: 'Visiteurs Uniques',
          data: data.map(d => d.count),
          borderColor: 'rgba(17, 110, 182, 1)',
          backgroundColor: gradientFill,
          fill: true,
          tension: 0.6,
          pointBackgroundColor: 'rgba(17, 110, 182, 1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false  // Désactiver complètement l'affichage de la légende
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              color: 'rgb(7, 46, 76, 1)',
              font: {
                family: 'Poppins, sans-serif'
              }
            },
            grid: {
              color: 'rgba(200, 200, 200, 0.2)'
            },
            border: {
              display: false
            }
          },
          x: {
            ticks: {
              color: 'rgb(7, 46, 76, 1)',
              font: {
                family: 'Poppins, sans-serif'
              }
            },
            grid: {
              display: false
            },
            border: {
              display: true,
              color: 'rgba(200, 200, 200, 0.5)'
            }
          }
        }
      }
    };
    
    this.chart = new Chart(ctx, chartConfig);
  }

  checkScreenSize() {
    this.shouldShowNotAvailable = window.innerWidth <= 900;
  }
}