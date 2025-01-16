import { Component ,Input} from '@angular/core';
import { ServiceDetailsBlock1Component } from '../../../shared/components/service-details-components/service-details-block1/service-details-block1.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-details',
  imports: [CommonModule, ServiceDetailsBlock1Component],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {
   @Input() service = {
      title: 'Climatisation, Ventilation, Désenfumage',
      introText: `
       Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis 
       nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in 
       nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. 
       Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.
        Amet eu.Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna 
        ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna
         tristique amet in Amet eu..
      `,
      imageUrl: 'images/HeaderDetailService1.png'
    };

}
