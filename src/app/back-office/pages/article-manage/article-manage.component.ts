import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../../../shared/sevices/auth.service';

@Component({
  selector: 'app-article-manage',
  imports: [CommonModule, FormsModule,ReactiveFormsModule,NotAvailableComponent],
  templateUrl: './article-manage.component.html',
  styleUrl: './article-manage.component.scss',
  standalone:true,
})
export class ArticleManageComponent implements OnInit {
  articleForm: FormGroup | undefined;
  
  // États d'édition des blocs
  editingBloc1 = false;
  editingBloc2 = false;
  editingBloc3 = false;
  
  // Aperçus des images
  headerBackgroundImage = 'url(/assets/images/default-banner.jpg)';
  bloc2ImagePreview: SafeUrl | null = null;
  bloc3ThumbnailPreview: SafeUrl | null = null;
  bloc3VideoUrl: SafeUrl | null = null;
  
  // Informations de l'auteur (à obtenir depuis un service d'authentification)
  authorName = 'Nom de l\'auteur connecté';
  authorImage = '/assets/images/default-author.jpg';
  currentDate = new Date();
  shouldShowNotAvailable = false;
  currentUser: any;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.createForm();
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit() {
    this.checkScreenSize();
  }

   @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkScreenSize();
    }
  
    checkScreenSize() {
      this.shouldShowNotAvailable = window.innerWidth <= 900;
    }


    createForm(): void {
      this.articleForm = this.fb.group({
        title: ['', Validators.required],
        type: ['', Validators.required],
        description: ['', Validators.required],
        // Bloc 1
        bloc1Title: ['', Validators.required],
        bloc1Description: ['', Validators.required],
        // Bloc 2
        bloc2Title: ['', Validators.required],
        bloc2Description1: [''],
        bloc2Description: ['', Validators.required],
        // Bloc 3
        bloc3Title: ['', Validators.required],
        bloc3Description1: [''],
        bloc3Description: ['', Validators.required],
      });
    }
  
    toggleEditBloc(blocNumber: number): void {
      switch (blocNumber) {
        case 1:
          this.editingBloc1 = !this.editingBloc1;
          break;
        case 2:
          this.editingBloc2 = !this.editingBloc2;
          break;
        case 3:
          this.editingBloc3 = !this.editingBloc3;
          break;
      }
    }
  
    onBannerImageSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        this.headerBackgroundImage = `url(${url})`;
      }
    }
  
    onBloc2ImageSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        this.bloc2ImagePreview = this.sanitizer.bypassSecurityTrustUrl(url);
      }
    }
  
    onBloc3ThumbnailSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        this.bloc3ThumbnailPreview = this.sanitizer.bypassSecurityTrustUrl(url);
      }
    }
  
    onBloc3VideoSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        this.bloc3VideoUrl = this.sanitizer.bypassSecurityTrustUrl(url);
      }
    }
  
    saveArticle(): void {
      if (this.articleForm && this.articleForm.valid) {
        // Créer l'objet de données de l'article
        const articleData = {
          ...this.articleForm.value,
          date: new Date(),
          bannerImage: this.headerBackgroundImage,
          blog: [
            {
              title: this.articleForm.get('bloc1Title')?.value,
              description: [this.articleForm.get('bloc1Description')?.value]
            },
            {
              title: this.articleForm.get('bloc2Title')?.value,
              description1: [this.articleForm.get('bloc2Description1')?.value],
              imageUrl: this.bloc2ImagePreview,
              description: [this.articleForm.get('bloc2Description')?.value]
            },
            {
              title: this.articleForm.get('bloc3Title')?.value,
              description1: [this.articleForm.get('bloc3Description1')?.value],
              video: {
                thumbnail: this.bloc3ThumbnailPreview,
                url: this.bloc3VideoUrl
              },
              description: [this.articleForm.get('bloc3Description')?.value]
            }
          ]
        };
        
        console.log('Article data:', articleData);
        // Ici, vous appelez votre service pour enregistrer les données
      } else {
        // Marquer tous les champs comme touchés pour montrer les erreurs
        if (this.articleForm) {
          Object.keys(this.articleForm.controls).forEach(key => {
            const control = this.articleForm?.get(key);
            control?.markAsTouched();
          });
        }
      }
    }


} 
