import { CommonModule } from '@angular/common';
import { Component , EventEmitter,Output} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudUserService } from '../../sevices/crud-user.service';
import { ToastService } from '../../sevices/toast.service';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm: FormGroup;
  activeTab: 'creation' | 'modification' | 'gestion' = 'creation';
  selectedPhoto: string | ArrayBuffer | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();
  isSubmitting: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private userService: CrudUserService,
    private toastService: ToastService
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      statut: ['', Validators.required],
      creationArticle: [false],
      creationRealisation: [false],
      modificationArticle: [false],
      modificationRealisation: [false],
      gestionDevis: [false],
      gestionTemoignage: [false]
    });
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


  setActiveTab(tab: 'creation' | 'modification' | 'gestion') {
    this.activeTab = tab;
  }

  async onSubmit() {
    if (this.userForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      try {
        const userData = {
          ...this.userForm.value,
          photo: this.selectedPhoto as string
        };
        
        await this.userService.addUser(userData);
        this.submit.emit(userData);
        this.closeModal();
      } catch (error) {
        console.error("Erreur lors de l'enregistrement de l'utilisateur:", error);
        this.toastService.show("Erreur lors de l'enregistrement de l'utilisateur", 'error');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
  closeModal() {
    this.close.emit();
  }
}
