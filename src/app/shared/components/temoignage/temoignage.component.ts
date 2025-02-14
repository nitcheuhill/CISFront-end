import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialModalComponent } from '../testimonial-modal/testimonial-modal.component';
import { FormsModule } from '@angular/forms';
// import { TestimonialDataService } from '../../sevices/testimonial-data.service';
import { TestimonialPushDataService,Testimonial } from '../../sevices/testimonial-push-data.service';

@Component({
  selector: 'app-temoignage',
  imports: [CommonModule, TestimonialModalComponent, FormsModule],
  templateUrl: './temoignage.component.html',
  styleUrl: './temoignage.component.scss',
 
})
export class TemoignageComponent implements OnInit{
 
  testimonials: Testimonial[] = [];
  // constructor(private TestimonialService : TestimonialDataService){}
  constructor(private testimonialService: TestimonialPushDataService) {}
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

  async ngOnInit(): Promise<void> {
    try {
      const testimonials = await this.testimonialService.getActiveTestimonials();
      this.testimonials = testimonials
        .filter((t: Testimonial) => t.isActive && t.isValidated)
        .map((t: Testimonial) => ({
          ...t,
          profession: t.profession || '',
          description: t.description || ''
        }));
    } catch (error) {
      console.error("Erreur lors de la récupération des témoignages:", error);
    }
  }
}
