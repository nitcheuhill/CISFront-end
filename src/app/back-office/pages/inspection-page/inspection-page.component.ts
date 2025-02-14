import { Component, OnInit } from '@angular/core';
import { QuoteRequest, QuoteRequestService } from '../../../shared/sevices/quote-request.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotAvailableComponent } from '../../../shared/components/not-available/not-available.component';

@Component({
  selector: 'app-inspection-page',
  imports: [CommonModule, FormsModule, NotAvailableComponent],
  templateUrl: './inspection-page.component.html',
  styleUrl: './inspection-page.component.scss'
})
export class InspectionPageComponent implements OnInit{
  quotes: QuoteRequest[] = [];
  filteredQuotes: QuoteRequest[] = [];
  selectedQuote: QuoteRequest | null = null;
  searchTerm: string = '';
  shouldShowNotAvailable = false;
  constructor(private quoteService: QuoteRequestService) {}

  async ngOnInit() {
    this.checkScreenSize();
    try {
      this.quotes = await this.quoteService.getAllQuoteRequests();
      this.filteredQuotes = [...this.quotes];
      if (this.quotes.length > 0) {
        this.selectQuote(this.quotes[0]);
      }
    } catch (error) {
      console.error('Error loading quotes:', error);
    }
  }
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.shouldShowNotAvailable = window.innerWidth <= 900;
  }

  getQuoteTitle(description: string): string {
    return description.length > 30 ? 
      description.substring(0, 40) + '...' : 
      description;
  }

  selectQuote(quote: QuoteRequest) {
    this.selectedQuote = quote;
  }

  filterQuotes() {
    this.filteredQuotes = this.quotes.filter(quote =>
      quote.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      quote.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      quote.services.some(service => 
        service.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

}
