import { Component , OnInit,HostListener} from '@angular/core';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from '../../../shared/components/create-user/create-user.component';
import { CrudUserService } from '../../../shared/sevices/crud-user.service';
import { EditAccessModalComponent } from '../../../shared/components/edit-access-modal/edit-access-modal.component';
import { HelloBannerComponent } from '../../../shared/components/hello-banner/hello-banner.component';

export interface User {
  id?: string;
  email: string;
  prenom: string;
  nom: string;
  password: string;
  poste: string;
  statut: string;
  photo?: string;
  creationArticle: boolean;
  creationRealisation: boolean;
  modificationArticle: boolean;
  modificationRealisation: boolean;
  gestionDevis: boolean;
  gestionTemoignage: boolean;
  isActivated: boolean;
  createdAt: Date;
}



@Component({
  selector: 'app-admin-page',
  imports: [FormsModule,CommonModule,NotAvailableComponent, CreateUserComponent,EditAccessModalComponent,HelloBannerComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent implements OnInit {
  users: User[] = [];
  shouldShowNotAvailable = false;
  showModal = false;
  selectedUser: User | null = null;
showEditAccessModal = false;

// Ajoutez cette méthode
openEditAccessModal(user: User): void {
  this.selectedUser = user;
  this.showEditAccessModal = true;
}

  constructor(private userService: CrudUserService) {}

  ngOnInit() {
    this.checkScreenSize();
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users = await this.userService.getAllUsers();
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs:', error);
    }
  }

  formatDate(date: Date | any): string {
    if (!date) return '';
    
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    
    return `${day} ${this.getMonthName(d.getMonth())} ${year}`;
  }

  getMonthName(month: number): string {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    return months[month];
  }


  countAccess(user: User): number {
    let count = 0;
    if (user.creationArticle) count++;
    if (user.creationRealisation) count++;
    if (user.modificationArticle) count++;
    if (user.modificationRealisation) count++;
    if (user.gestionDevis) count++;
    if (user.gestionTemoignage) count++;
    
    // Ajouter d'autres types d'accès si nécessaire
    
    return count;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.shouldShowNotAvailable = window.innerWidth <= 900;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  onEditModalClosed() {
    this.showEditAccessModal = false;
    this.selectedUser = null;
    this.loadUsers(); // Recharger les utilisateurs après la fermeture
  }

}
