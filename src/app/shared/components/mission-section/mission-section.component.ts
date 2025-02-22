import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';
import SplitType from 'split-type';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-mission-section',
  imports: [CommonModule],
  templateUrl: './mission-section.component.html',
  styleUrl: './mission-section.component.scss'
})
export class MissionSectionComponent {

  @ViewChild('textAnimation') textAnimation!: ElementRef;

  missions = [
    {
      icon: '/icons/iconsMissionGrid/Calque_1 (20).png',
      desc: "De participer au développement local des marques d'équipements techniques",
    },
    {
      icon: '/icons/iconsMissionGrid/Calque_1 (21).png',
      desc: "D'assurer la mise en œuvre locale des systèmes d'équipements intégrés",
    },
    {
      icon: '/icons/iconsMissionGrid/Calque_1 (22).png',
      desc: "D'assurer le suivi et la maintenance quotidienne des infrastructures technologiques",
    },
    {
      icon: '/icons/iconsMissionGrid/Calque_1 (23).png',
      desc: "D'accompagner les constructeurs d'équipements dans le processus de maîtrise continue de la qualité",
    },
  ];

  @ViewChildren('services') services !: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    const splitText = new SplitType(this.textAnimation.nativeElement, { types: 'chars' });
    console.log(this.services);
    setTimeout(() => {
      if(this.services.length > 0) {
        gsap.from(this.services.map(el => el.nativeElement), {
          opacity: 0,
          y: 100,
          stagger: { amount: .5 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".missions",
            start: "top 80%",
            end: "top 30%",
            scrub: 1
          }
        });
      }

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
            scrub: 1,
          }
        }
      );
    }, 300)
  }
}
