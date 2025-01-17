import { Component ,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalVideoComponent } from '../../modal-video/modal-video.component';

@Component({
  selector: 'app-service-details-block2',
  imports: [CommonModule,ModalVideoComponent],
  templateUrl: './service-details-block2.component.html',
  styleUrl: './service-details-block2.component.scss'
})
export class ServiceDetailsBlock2Component {
  @ViewChild(ModalVideoComponent) videoModal!: ModalVideoComponent;

  sectionData2 = [
    {
      title: '2. Conditionnement d’air des centres de données (data center)',
      description1: [
        `Lorem ipsum dolor sit amet consectetur.`,
        `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
      ],
      description: [
        `Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`,
        `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
      ],
      video: {
        thumbnail: 'images/assetsDétailsServices/Block2/Frame 97.png',
        url: 'images/vidéos/Video1.mp4',
      },
      images: [
        { src: 'images/assetsDétailsServices/Block2/Frame 97.png', alt: 'Technician working on AC' },
        { src: 'images/assetsDétailsServices/Block2/Frame 99.png', alt: 'Close-up of AC system' },
        { src: 'images/assetsDétailsServices/Block2/Frame100.png', alt: 'Installed AC unit' },
        { src: 'images/assetsDétailsServices/Block2/Frame100.png', alt: 'Installed AC unit' },
        // { src: 'images/assetsDétailsServices/Block2/Frame100.png', alt: 'Installed AC unit' }
      ]
    }
  ];

  openVideoModal(videoUrl: string) {
    if (this.videoModal) {
      this.videoModal.videoUrl = videoUrl;
      this.videoModal.openModal();
    }
  }
}
