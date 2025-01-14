import { Component } from '@angular/core';
import { MissionSectionComponent } from '../../../shared/components/mission-section/mission-section.component';
import { TeamCarouselComponent } from '../../../shared/components/team-carousel/team-carousel.component';
import { ClientsCarouselComponent } from '../../../shared/components/clients-carousel/clients-carousel.component';
@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [MissionSectionComponent, TeamCarouselComponent,ClientsCarouselComponent],
  templateUrl: './about-page.component.html',  
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
