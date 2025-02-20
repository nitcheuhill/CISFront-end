import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';
import { FormsModule } from '@angular/forms';
import { VisitorTrackingService } from '../../../shared/sevices/visitor-tracking.service';
import { Subscription } from 'rxjs';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { HelloBannerComponent } from '../../../shared/components/hello-banner/hello-banner.component';

Chart.register(...registerables, annotationPlugin);

type PeriodType = 'annual' | 'monthly' | 'weekly';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [NotAvailableComponent, CommonModule, FormsModule,HelloBannerComponent],
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit, OnDestroy {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;
  
  private chart: Chart | null = null;
  private dataSubscription: Subscription | null = null;
  private totalSubscription: Subscription | null = null;

  totalVisitors: number = 0;
  selectedPeriod: PeriodType = 'annual';
  selectedMonth: number = new Date().getMonth();
  selectedDay: number = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
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
  
  shouldShowNotAvailable = false;
  
  constructor(private visitorService: VisitorTrackingService) {}
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
    this.updateChart();
  }

  ngOnInit() {
    this.checkScreenSize();
    this.initSubscriptions();
  }

  ngOnDestroy() {
    this.cleanupSubscriptions();
  }

  private initSubscriptions() {
    this.dataSubscription = this.visitorService.getVisitorData().subscribe(() => {
      this.updateChart();
    });
    
    this.totalSubscription = this.visitorService.getTotalVisitors().subscribe(total => {
      this.totalVisitors = total;
    });
  }

  private cleanupSubscriptions() {
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
    this.updateSelectedPoint();
    this.updateChart();
  }
  
  selectDay(index: number) {
    this.selectedDay = index;
    this.updateSelectedPoint();
    this.updateChart();
  }
  
  selectDayOfMonth(day: number) {
    this.selectedDayOfMonth = day;
    this.updateSelectedPoint();
    this.updateChart();
  }

  private updateSelectedPoint() {
    const filterParams = {
      period: this.selectedPeriod,
      selectedMonth: this.selectedMonth,
      selectedDay: this.selectedDay,
      selectedDayOfMonth: this.selectedDayOfMonth
    };
    return this.visitorService.getSelectedDateValue(filterParams);
  }
  
  getDaysInMonth(): number[] {
    const year = new Date().getFullYear();
    const month = this.selectedMonth;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  private createChartGradient(ctx: CanvasRenderingContext2D) {
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
    gradientFill.addColorStop(0, 'rgba(96, 158, 206, 1)');
    gradientFill.addColorStop(1, 'rgba(255, 255, 255, 1)');
    return gradientFill;
  }

  private createChartConfig(data: any[], selectedPoint: string | null, ctx: CanvasRenderingContext2D): ChartConfiguration {
    return {
      type: 'line',
      data: {
        labels: data.map(d => d.date),
        datasets: [{
          label: 'Visiteurs Uniques',
          data: data.map(d => d.count),
          borderColor: 'rgba(17, 110, 182, 1)',
          backgroundColor: this.createChartGradient(ctx),
          fill: true,
          tension: 0,
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(17, 110, 182, 1)',
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
          tooltip: {
            intersect: false,
            mode: 'index',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(17, 110, 182, 1)',
            bodyColor: 'rgba(17, 110, 182, 1)',
            borderWidth: 1,
          },
          annotation: {
            annotations: selectedPoint ? {
              line1: {
                type: 'line',
                xMin: selectedPoint,
                xMax: selectedPoint,
                yMin: 0,
                yMax: 'max',
                borderColor: 'rgba(17, 110, 182, 1)',
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                  content: `${this.visitorService.getPointValue(selectedPoint)} visiteurs`,
                  display: true,
                  position: 'center',
                  backgroundColor: 'rgba(17, 110, 182, 1)',
                  color: 'white',
                  padding: 8,
                  borderRadius: 4
                }
              }
            } : {}
          }
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
              display: false
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
        },
        interaction: {
          mode: 'index',
          intersect: false
        }
      }
    };
  }

  private updateChart() {
    if (!this.chartCanvas) return;
    
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    if (this.chart) {
      this.chart.destroy();
    }

    const filterParams = {
      period: this.selectedPeriod,
      selectedMonth: this.selectedMonth,
      selectedDay: this.selectedDay,
      selectedDayOfMonth: this.selectedDayOfMonth
    };

    const data = this.visitorService.getFilteredData(filterParams);
    const selectedPoint = this.updateSelectedPoint();
    
    const chartConfig = this.createChartConfig(data, selectedPoint, ctx);
    this.chart = new Chart(ctx, chartConfig);
  }

  private checkScreenSize() {
    this.shouldShowNotAvailable = window.innerWidth <= 900;
  }
}