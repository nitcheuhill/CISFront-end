import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialModalComponent } from '../testimonial-modal/testimonial-modal.component';
import { FormsModule } from '@angular/forms';
import { TestimonialDataService } from '../../sevices/testimonial-data.service';

@Component({
  selector: 'app-temoignage',
  imports: [CommonModule, TestimonialModalComponent, FormsModule],
  templateUrl: './temoignage.component.html',
  styleUrl: './temoignage.component.scss',
 
})
export class TemoignageComponent implements OnInit{
 
  testimonials : any[] = [];
  constructor(private TestimonialService : TestimonialDataService){}
  
  currentIndex = 0;

  nextTestimonial() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    }
  }

  prevTestimonial() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit():void {
    this.testimonials = this.TestimonialService.getTestimonials();
  }
}
