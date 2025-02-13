import { Component, EventEmitter, Output, ElementRef,Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestimonialPushDataService } from '../../sevices/testimonial-push-data.service';
import { ToastService } from '../../sevices/toast.service';

@Component({
  standalone: true,
  selector: 'app-testimonial-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './testimonial-modal.component.html',
  styleUrl: './testimonial-modal.component.scss'
})
export class TestimonialModalComponent {
  @Output() close = new EventEmitter<void>();
  testimonialForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    profession: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });

  selectedPhoto: string | ArrayBuffer | null = null;
  isSubmitting = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef,private testimonialService:TestimonialPushDataService, private toastService: ToastService) {}

  openModal() {
    this.renderer.addClass(this.elRef.nativeElement.ownerDocument.body, 'overflow-hidden');
  }

  closeModal() {
    this.renderer.removeClass(this.elRef.nativeElement.ownerDocument.body, 'overflow-hidden');
    this.close.emit();
  }

  triggerFileInput() {
    const fileInput = document.getElementById('image') as HTMLInputElement;
    fileInput.click();
  }
  
  onPhotoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPhoto = reader.result; // Contient l'aperçu de l'image
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  async submitForm() {
    if (this.testimonialForm.valid && !this.isSubmitting) {
      try {
        this.isSubmitting = true;
        
        const testimonialData = {
          name: this.testimonialForm.get('name')?.value || '',
          email: this.testimonialForm.get('email')?.value || '',
          profession: this.testimonialForm.get('profession')?.value || '',
          description: this.testimonialForm.get('description')?.value || '',
          image: this.selectedPhoto?.toString() || ''
        };

        await this.testimonialService.addTestimonial(testimonialData);
        this.toastService.show('Merci pour votre témoignage !', 'success');
        this.closeModal();
      } catch (error) {
        console.error("Erreur lors de l'envoi du témoignage:", error);
        this.toastService.show('Une erreur est survenue lors de l\'envoi du témoignage.', 'error');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
