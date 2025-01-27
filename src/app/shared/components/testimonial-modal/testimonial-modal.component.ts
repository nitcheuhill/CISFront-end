import { Component, EventEmitter, Output, ElementRef,Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
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

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  openModal() {
    this.renderer.addClass(this.elRef.nativeElement.ownerDocument.body, 'overflow-hidden');
  }

  closeModal() {
    this.renderer.removeClass(this.elRef.nativeElement.ownerDocument.body, 'overflow-hidden');
    this.close.emit();
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

  submitForm() {
    if (this.testimonialForm.valid) {
      console.log(this.testimonialForm.value); // Ici, tu peux gérer l'envoi de données
      this.closeModal();
    }
  }
}
