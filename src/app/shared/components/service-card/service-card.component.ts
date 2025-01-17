import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() service: any; 

  constructor(private router: Router) {}

  navigateToDetails(service: any) {
    this.router.navigate(['/details-services'], {
      queryParams: { title: service.title }
    }).then(() => {
      window.location.reload();
    });
  }
}
