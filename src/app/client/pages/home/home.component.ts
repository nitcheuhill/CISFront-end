import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemoignageComponent } from '../../../shared/components/temoignage/temoignage.component';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { ArticlesComponent } from '../../../shared/components/articles/articles.component';
import { RouterModule, Router} from '@angular/router';
import { ServiceDataService } from '../../../shared/sevices/service-data.service';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule, TemoignageComponent,ContactFormComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren('services') services !: QueryList<ElementRef>;
  @ViewChildren('gridItem') gridItems !: QueryList<ElementRef>;

  infoservices : any [] = [];
  constructor(private servicesService : ServiceDataService,
    private router: Router 
  ) { }
  isSmallScreen: boolean = false;
  @ViewChild('textPara') paragraph!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  @ViewChild('textAnimation') textAnimation!: ElementRef;

  ngAfterViewInit() {
    const title = new SplitType(this.title.nativeElement, { types: 'chars' });
    const paragraph = new SplitType(this.paragraph.nativeElement, { types: 'words' });
    
    const TL = gsap.timeline();
    TL
    .from('.image-container', {
      delay: 1.3,
      x: '50', 
      opacity: 0
    })
    .from(title.chars, {
      y: 30,
      stagger: { amount: .4 },
      opacity: 0
    }, "<.3")
    .to(title.chars, {
      y: '*',
      opacity: 1,
      ease: 'power1.inOut'
    })
    .from(paragraph.words, {
      y: 30,
      stagger: { amount: .4 },
      delay: .5,
      opacity: 0
    }, "<-.5")
    .to(paragraph.words, {
      y: '*',
      opacity: 1,
      ease: 'power1.inOut'
    })
    .from('.search-container', {
      x: '-80',
      opacity: 0, 
      ease: 'power2.inOut'
    }, "<-.5")
    .from('.team', {
      y: '30',
      opacity: 0, 
      ease: 'power2.inOut'
    }, "<")
    .from('.clients', {
      y: '30',
      delay: .2,
      opacity: 0, 
      ease: 'power2.out'
    }, "<.1")



    const splitText = new SplitType(this.textAnimation.nativeElement, { types: 'chars' });

    setTimeout(() => {  // ⚠️ Petit délai pour être sûr que les éléments sont rendus
      if (this.services.length > 0) {
        gsap.from(this.services.map(el => el.nativeElement), {
          opacity: 0,
          y: 100,
          stagger: { amount: .5 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

        gsap.from('.contact-content', {
          opacity: 0,
          x: -80,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 60%",
            end: "top 30%",
            scrub: true
          }
        });
        gsap.from('.form', {
          opacity: 0,
          delay: .3,
          x: 80,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".form",
            start: "top 60%",
            end: "top 30%",
            scrub: true
          }
        });

        gsap.from(this.gridItems.map(el => el.nativeElement), {
          opacity: 0,
          y: 30,
          stagger: { amount: .5 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".images-grid",
            start: "top 80%",
            end: "top 30%",
            scrub: true
          }
        });

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
      } else {
        console.warn("⚠️ Aucun élément récupéré !");
      }
    }, 300); 
  }
  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());

    this.infoservices = this.servicesService.getServices();
    // console.log('Services récupérés :', this.infoservices);
   }
   checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768; // Ajuste selon ton besoin
  }
  getShortTitle(title: string): string {
    if (title.length > 20) {
      return this.isSmallScreen ? title.slice(0, 35) + '...' : title;
    }
    return title;
  }

   onServiceClick(service: any): void {
    this.router.navigate(['/service', service.title]);
  }  

}
