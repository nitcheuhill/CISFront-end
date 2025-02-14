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
      this.sortQuotesByDate();
      this.filteredQuotes = [...this.quotes];
      if (this.quotes.length > 0) {
        this.selectQuote(this.quotes[0]);
      }
    } catch (error) {
      console.error('Error loading quotes:', error);
    }
  }
  private sortQuotesByDate() {
    this.quotes.sort((a, b) => {
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
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
       // Marquer le devis comme traité
       if (!quote.isProcessed) {
        this.quoteService.updateQuoteRequestDetails(quote.id!, { isProcessed: true });
      }
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

  async deleteQuote(event: Event, quoteId: string) {
    event.stopPropagation(); // Empêcher la sélection du quote lors de la suppression
    if (confirm('Êtes-vous sûr de vouloir supprimer ce devis ?')) {
      try {
        await this.quoteService.deleteQuoteRequest(quoteId);
        this.quotes = this.quotes.filter(q => q.id !== quoteId);
        this.filteredQuotes = this.filteredQuotes.filter(q => q.id !== quoteId);
        if (this.selectedQuote?.id === quoteId) {
          this.selectedQuote = this.quotes.length > 0 ? this.quotes[0] : null;
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du devis:', error);
      }
    }
  }
}
