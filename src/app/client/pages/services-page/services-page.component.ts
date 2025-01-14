import { Component } from '@angular/core';
import { ServicesGridComponent } from '../../../shared/components/services-grid/services-grid.component';
import { RequestFormComponent } from '../../../shared/components/request-form/request-form.component';
@Component({
  selector: 'app-services-page',
  imports: [ServicesGridComponent, RequestFormComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {

}
