import { Component, EventEmitter, Output, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestimonialPushDataService } from '../../sevices/testimonial-push-data.service';
import { ToastService } from '../../sevices/toast.service';

interface TestimonialData {
  name: string;
  email: string;
  profession: string;
  description: string;
  image: string;
}

@Component({
  standalone: true,
  selector: 'app-testimonial-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './testimonial-modal.component.html',
  styleUrl: './testimonial-modal.component.scss'
})
export class TestimonialModalComponent {
  @Output() close = new EventEmitter<void>();
  
  testimonialForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    profession: new FormControl(''),
    description: new FormControl('', [Validators.maxLength(299)]),
    image: new FormControl('')
  });

  selectedPhoto: string | ArrayBuffer | null = null;
  isSubmitting = false;

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    private testimonialService: TestimonialPushDataService,
    private toastService: ToastService
  ) {
    const descriptionControl = this.testimonialForm.get('description');
    if (descriptionControl) {
      descriptionControl.valueChanges.subscribe((value: string) => {
        if (value && value.length > 299) {
          this.testimonialForm.patchValue({
            description: value.substring(0, 299)
          }, { emitEvent: false });
        }
      });
    }
  }

  onDescriptionInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    const value = textarea.value;
    
    if (value.length > 299) {
      const truncatedValue = value.substring(0, 299);
      this.testimonialForm.patchValue({
        description: truncatedValue
      });
      textarea.setSelectionRange(299, 299);
    }
  }

  openModal(): void {
    this.renderer.addClass(this.elRef.nativeElement.ownerDocument.body, 'overflow-hidden');
  }

  closeModal(): void {
    this.renderer.removeClass(this.elRef.nativeElement.ownerDocument.body, 'overflow-hidden');
    this.close.emit();
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('image');
    if (fileInput) {
      fileInput.click();
    }
  }
  
  onPhotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          const maxWidth = 800;
          const maxHeight = 600;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            this.selectedPhoto = canvas.toDataURL('image/jpeg', 0.8);
          }
        };
        
        if (typeof reader.result === 'string') {
          img.src = reader.result;
        }
      };
      
      reader.readAsDataURL(input.files[0]);
    }
  }

  async submitForm(): Promise<void> {
    if (this.testimonialForm.valid && !this.isSubmitting) {
      try {
        this.isSubmitting = true;
        
        const testimonialData: TestimonialData = {
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