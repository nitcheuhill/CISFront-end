import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
  searchQuery: string = '';
  openIndex: number | null = null;

  faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Eros suspendisse natoque tortor urna tristique amet?',
      answer:
        'Egestas nulla est urna ullamcorper duis nibh vitae elementum. Lorem ipsum dolor sit amet consectetur. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Ullamcorper duis nibh vitae elementum?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Ullamcorper duis nibh vitae elementum?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Ullamcorper duis nibh vitae elementum?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Ullamcorper duis nibh vitae elementum?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Ullamcorper duis nibh vitae elementum?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Ullamcorper duis nibh vitae elementum?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Ullamcorper duis nibh vitae elementum?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla est urna ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
    {
      question: 'Suspendisse natoque tortor urna tristique amet?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Ullamcorper duis nibh vitae elementum. Eros suspendisse natoque tortor urna tristique amet.',
    },
  ];

  filteredFaqs = [...this.faqs];

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  filterFaqs(): void {
    this.filteredFaqs = this.faqs.filter((faq) =>
      faq.question.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
