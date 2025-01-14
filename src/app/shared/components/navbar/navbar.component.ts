import { Component ,HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isVisible: boolean = true; // La barre de navigation est visible par défaut
  lastScrollTop: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > this.lastScrollTop) {
      // Scrolling vers le bas
      this.isVisible = false;
    } else {
      // Scrolling vers le haut
      this.isVisible = true;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Empêcher des valeurs négatives
  }

}
