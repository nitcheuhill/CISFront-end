import { Component , ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalVideoComponent } from '../../modal-video/modal-video.component';

@Component({
  selector: 'app-service-details-block1',
  imports: [CommonModule,ModalVideoComponent],
  templateUrl: './service-details-block1.component.html',
  styleUrl: './service-details-block1.component.scss'
})
export class ServiceDetailsBlock1Component {
  @ViewChild(ModalVideoComponent) videoModal!: ModalVideoComponent;

  sectionData = [
    {
      title: '1. Conditionnement d’air résidentiel et commercial',
      description1: [
        `Hello Word`,
        `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
        natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
        sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
      ],
      description: [
        `Lorem ipsum dolor sit amet consectetur.
        Egestas nulla est urna ullamcorper duis nibh vitae elementum.
        Egestas nulla est urna ullamcorper duis nibh vitae elementum.
         Egestas nulla est urna ullamcorper duis nibh vitae elementum. 
          Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit. Amet eu..`,
        `Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse 
        natoque tortor urna tristique amet in nullam lacus. Neque dolor maecenas adipiscing 
        sed natoque aliquam. Laoreet nisl sit pellentesque commodo aenean vitae hendrerit hendrerit.`
      ],
      video: {
        thumbnail: 'images/assetsDétailsServices/Block1/thumbnail.jpeg',
        url: 'images/vidéos/Video.mp4',
      },
      images: [
        { src: 'images/assetsDétailsServices/Block1/Frame 94 (1).png', alt: 'Image 1' },
        { src: 'images/assetsDétailsServices/Block1/Frame 95 (1).png', alt: 'Image 2' },
        { src: 'images/assetsDétailsServices/Block1/Frame 92 (1).png', alt: 'Image 3' },
        { src: 'images/assetsDétailsServices/Block1/Frame 95 (1).png', alt: 'Image 2' },
        { src: 'images/assetsDétailsServices/Block1/Frame 92 (1).png', alt: 'Image 3' },
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
