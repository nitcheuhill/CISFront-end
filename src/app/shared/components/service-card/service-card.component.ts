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

  onServiceClick() {
    this.router.navigate(['/service', this.service.title]);
  }
}
