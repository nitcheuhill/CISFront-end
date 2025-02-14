import { Component, OnInit } from '@angular/core';
import { TestimonialPushDataService,Testimonial} from '../../../shared/sevices/testimonial-push-data.service';
import { CommonModule } from '@angular/common';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';
import { ConfirmModalComponent } from '../../../shared/components/confirm-modal/confirm-modal.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-testimonialspage',
  imports: [CommonModule, NotAvailableComponent, ConfirmModalComponent,LoaderComponent],
  templateUrl: './testimonialspage.component.html',
  styleUrl: './testimonialspage.component.scss'
})
export class TestimonialspageComponent implements OnInit {
  testimonials: Testimonial[] = [];
  shouldShowNotAvailable = false;
  filteredTestimonials: Testimonial[] = [];
  filter: 'all' | 'active' | 'inactive' = 'all';
  loadingTestimonialId: string | null = null;
  deletingTestimonialId: string | null = null;

  showDeleteModal = false;
  selectedTestimonial: Testimonial | null = null;
  isDeleting = false;
  loadingValidationId: string | null = null;

  constructor(private testimonialService: TestimonialPushDataService) {}
  
  onResize(event: any) {
    this.checkScreenSize();
  }
  ngOnInit(): void {
    this.loadTestimonials();
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.shouldShowNotAvailable = window.innerWidth <= 900;
  }

  async loadTestimonials() {
    try {
      this.testimonials = await this.testimonialService.getAllTestimonials();
      this.applyFilter();
    } catch (error) {
      console.error("Erreur lors du chargement des témoignages :", error);
    }
  }
  async toggleValidation(testimonial: Testimonial) {
    if (!testimonial.id || !testimonial.isActive) return;
    
    this.loadingValidationId = testimonial.id;
    try {
      await this.testimonialService.updateTestimonialValidation(
        testimonial.id, 
        !testimonial.isValidated
      );
      await this.loadTestimonials();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la validation :", error);
    } finally {
      this.loadingValidationId = null;
    }
  }
  
  
  async toggleActive(testimonial: Testimonial) {
    if (!testimonial.id) return;
    
    this.loadingTestimonialId = testimonial.id;
    try {
      await this.testimonialService.updateTestimonialStatus(testimonial.id, !testimonial.isActive);
      await this.loadTestimonials();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut :", error);
    } finally {
      this.loadingTestimonialId = null;
    }
  }

  async deleteTestimonial(testimonialId: string) {
    this.deletingTestimonialId = testimonialId;
    try {
      await this.testimonialService.deleteTestimonial(testimonialId);
      await this.loadTestimonials();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    } finally {
      this.deletingTestimonialId = null;
    }
  }

  setFilter(filter: 'all' | 'active' | 'inactive') {
    this.filter = filter;
    this.applyFilter();
  }

  applyFilter() {
    switch (this.filter) {
      case 'all':
        this.filteredTestimonials = [...this.testimonials];
        break;
      case 'active':
        this.filteredTestimonials = this.testimonials.filter(t => t.isActive === true);
        break;
      case 'inactive':
        this.filteredTestimonials = this.testimonials.filter(t => t.isActive === false);
        break;
    }
  }
  get inactiveTestimonialsCount(): number {
    return this.testimonials.filter(t => !t.isActive).length;
  }
  get activeTestimonialsCount(): number {
    return this.testimonials.filter(t => t.isActive).length;
  }
  
  openDeleteModal(testimonial: Testimonial): void {
    this.selectedTestimonial = testimonial;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedTestimonial = null;
  }

  async confirmDelete(): Promise<void> {
    if (!this.selectedTestimonial?.id) return;

    this.isDeleting = true;
    try {
      await this.testimonialService.deleteTestimonial(this.selectedTestimonial.id);
      await this.loadTestimonials();
      this.closeDeleteModal();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    } finally {
      this.isDeleting = false;
    }
  }
  
}
