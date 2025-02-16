import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MissionSectionComponent } from '../../../shared/components/mission-section/mission-section.component';
import { TeamCarouselComponent } from '../../../shared/components/team-carousel/team-carousel.component';
import { ClientsCarouselComponent } from '../../../shared/components/clients-carousel/clients-carousel.component';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [MissionSectionComponent, TeamCarouselComponent,ClientsCarouselComponent],
  templateUrl: './about-page.component.html',  
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent implements AfterViewInit {

  @ViewChild('titleAbout') titleAbout!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('textAnimation') textAnimation!: ElementRef;
  @ViewChild('img1') img1!: ElementRef;
  @ViewChild('img2') img2!: ElementRef;
  @ViewChild('img3') img3!: ElementRef;

  ngAfterViewInit(): void {
    const title = new SplitType(this.titleAbout.nativeElement, { types: 'chars' });
    const paragraph = new SplitType(this.description.nativeElement, { types: 'words' });

    const TL = gsap.timeline();
    TL
    .fromTo(title.chars, {
      y: 30,
      opacity: 0
    }, { 
      y: '*',
      delay: 1,
      stagger: { amount: .1 },
      opacity: 1,
      ease: 'power1.inOut'
    })
    .fromTo(paragraph.words, {
      y: 30,
      opacity: 0
    }, { 
      y: '*',
      delay: 1,
      stagger: { amount: .3 },
      opacity: 1,
      ease: 'power1.inOut'
    }, "<")
    .fromTo(this.img2.nativeElement, {
      y: -50,
      opacity: 0
    }, { 
      y: '*',
      opacity: 1,
      ease: 'power1.inOut'
    })
    .fromTo(this.img1.nativeElement, {
      x: 50,
      opacity: 0
    }, { 
      x: '*',
      opacity: 1,
      ease: 'power1.inOut'
    }, "<.3")
    .fromTo(this.img3.nativeElement, {
      x: -50,
      opacity: 0
    }, { 
      x: '*',
      opacity: 1,
      ease: 'power1.inOut'
    }, "<")

    const splitText = new SplitType(this.textAnimation.nativeElement, { types: 'chars' });

    setTimeout(() => {

      gsap.fromTo(
        splitText.chars,
        { color: '#999' },
        {
          color: '#000', 
          stagger: 0.05,
          scrollTrigger: {
            trigger: this.textAnimation.nativeElement,
            start: 'top 80%', 
            end: 'top 20%',
            scrub: true,
          }
        }
      );
    }, 300)
  }
  
}
