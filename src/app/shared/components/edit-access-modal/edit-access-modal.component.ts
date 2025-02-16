import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudUserService,User } from '../../sevices/crud-user.service';
import { ToastService } from '../../sevices/toast.service';

@Component({
  selector: 'app-edit-access-modal',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-access-modal.component.html',
  styleUrl: './edit-access-modal.component.scss'
})
export class EditAccessModalComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() user!: User;
  @Output() visibleChange = new EventEmitter<boolean>();

  userCopy!: User;
  
  constructor(
    private crudUserService: CrudUserService,
    private toastService: ToastService
  ) {}
  
  ngOnInit(): void {
    this.resetUserCopy();
  }
  
  resetUserCopy(): void {
    this.userCopy = { ...this.user };
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

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }
  
  closeModal(event: Event): void {
    this.close();
  }
  
  toggleActivation(): void {
    this.userCopy.isActivated = !this.userCopy.isActivated;
  }
  
  async saveChanges(): Promise<void> {
    try {
      if (!this.user.id) {
        throw new Error("User ID is missing");
      }
      
      await this.crudUserService.updateUser(this.user.id, {
        statut: this.userCopy.statut,
        creationArticle: this.userCopy.creationArticle,
        creationRealisation: this.userCopy.creationRealisation,
        modificationArticle: this.userCopy.modificationArticle,
        modificationRealisation: this.userCopy.modificationRealisation,
        gestionDevis: this.userCopy.gestionDevis,
        gestionTemoignage: this.userCopy.gestionTemoignage,
        isActivated: this.userCopy.isActivated
      });
      
      // Update the original user object with new values
      Object.assign(this.user, this.userCopy);
      this.toastService.show("Les modifications ont été enregistrées", 'success');
      this.close();
    } catch (error) {
      this.toastService.show("Erreur lors de la mise à jour des accès", 'error');
      console.error(error);
    }
  }
  
  async deleteUser(): Promise<void> {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.")) {
      try {
        if (!this.user.id) {
          throw new Error("User ID is missing");
        }
        
        await this.crudUserService.deleteUser(this.user.id);
        this.toastService.show("L'utilisateur a été supprimé", 'success');
        this.close();
      } catch (error) {
        this.toastService.show("Erreur lors de la suppression de l'utilisateur", 'error');
        console.error(error);
      }
    }
  }

}
