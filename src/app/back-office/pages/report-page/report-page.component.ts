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
  private dataSubscription: Subscription | null = null;
  private totalSubscription: Subscription | null = null;

  totalVisitors: number = 0;
  filteredVisitors: number = 0;  // Add this to show filtered visitor count
  selectedPeriod: PeriodType = 'annual';
  selectedMonth: number = new Date().getMonth();
  selectedDay: number = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; // Adjust for Monday start
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
    this.dataSubscription = this.visitorService.getVisitorData().subscribe(data => {
      this.updateChart();
    });
    
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

    // Pass all filter parameters to the service
    const filterParams = {
      period: this.selectedPeriod,
      selectedMonth: this.selectedMonth,
      selectedDay: this.selectedDay,
      selectedDayOfMonth: this.selectedDayOfMonth
    };
    
    const data = this.visitorService.getFilteredData(filterParams);
    
    // Calculate total filtered visitors
    this.filteredVisitors = data.reduce((total, item) => total + item.count, 0);
    
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
            display: false
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
