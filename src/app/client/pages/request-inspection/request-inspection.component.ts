// request-inspection.component.ts
// request-inspection.interfaces.ts
export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

export interface Service {
  id: string;
  label: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  description: string;
  services: string[];
  countryCode: string;
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuoteRequestService } from '../../../shared/sevices/quote-request.service';
import { ToastService } from '../../../shared/sevices/toast.service';

@Component({
  selector: 'app-request-inspection',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-inspection.component.html',
  styleUrls: ['./request-inspection.component.scss']
})
export class RequestInspectionComponent implements OnInit {
  quoteForm: FormGroup;
  showCountryDropdown = false;
  selectedServices: string[] = [];
  countrySearchText: string = '';
  filteredCountries: Country[] = [];
  displayedServices: Service[] = [];
  countries: Country[] = [];
  selectedCountry: Country | null = null;

  services: Service[] = [
    { id: 'climatisation', label: 'Climatisation' },
    { id: 'ventilation', label: 'Ventilation' },
    { id: 'production-eau', label: 'Production et traitement de l\'eau' },
    { id: 'energie-renouvelable', label: 'Énergie renouvelable' },
    { id: 'infrastructure-plomberie', label: 'Infrastructure de plomberie' },
    { id: 'desenfumage', label: 'Désenfumage' },
    { id: 'protection-incendie', label: 'Protection d\'incendie électrique' },
    { id: 'lutte-incendie', label: 'Infrastructure de lutte contre l\'incendie' },
    { id: 'transport-fluides', label: 'Équipement mécanique de transport et fluides' },
    { id: 'energie-electrique', label: 'Énergie électrique' },
    { id: 'equipements-specifiques', label: 'Équipements spécifiques' }
  ];

  constructor(private fb: FormBuilder, private quoteService: QuoteRequestService,private toastService: ToastService) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      description: ['']
    });
    this.displayedServices = [...this.services];
  }

  ngOnInit(): void {
    this.loadCountries();
  }

  async loadCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      this.countries = data.map((country: any) => ({
        name: country.name.common,
        code: country.cca2,
        dialCode: country.idd.root + (country.idd.suffixes?.[0] || ''),
        flag: country.flags.svg
      })).sort((a: Country, b: Country) => a.name.localeCompare(b.name));
      
      this.selectedCountry = this.countries.find(c => c.code === 'FR') || this.countries[0];
      this.filteredCountries = [...this.countries];
    } catch (error) {
      console.error('Error loading countries:', error);
    }
  }

  searchCountry(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value.toLowerCase();
    this.countrySearchText = searchText;
    this.filteredCountries = this.countries.filter(country => 
      country.name.toLowerCase().includes(searchText) || 
      country.dialCode.toLowerCase().includes(searchText)
    );
  }

  toggleCountryDropdown(): void {
    this.showCountryDropdown = !this.showCountryDropdown;
    if (this.showCountryDropdown) {
      setTimeout(() => {
        const searchInput = document.getElementById('countrySearch');
        searchInput?.focus();
      }, 0);
    } else {
      this.countrySearchText = '';
      this.filteredCountries = [...this.countries];
    }
  }

  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.showCountryDropdown = false;
    this.countrySearchText = '';
    this.filteredCountries = [...this.countries];
  }

  toggleService(serviceId: string): void {
    const serviceElement = document.getElementById(serviceId);
    if (!serviceElement) return;

    const index = this.selectedServices.indexOf(serviceId);
    if (index === -1) {
      const currentPosition = serviceElement.getBoundingClientRect();
      const container = document.querySelector('.services-grid');
      if (!container) return;

      const destinationPosition = container.getBoundingClientRect();
      const deltaY = destinationPosition.top - currentPosition.top;
      const deltaX = destinationPosition.left - currentPosition.left;

      serviceElement.style.transition = 'transform 0.5s ease-in-out';
      serviceElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

      setTimeout(() => {
        serviceElement.style.transform = '';
        this.selectedServices.unshift(serviceId);
        this.reorderServices();
      }, 500);
    } else {
      this.selectedServices = this.selectedServices.filter(id => id !== serviceId);
      this.reorderServices();
    }
  }

  private reorderServices(): void {
    this.displayedServices = [
      ...this.services.filter(service => this.selectedServices.includes(service.id)),
      ...this.services.filter(service => !this.selectedServices.includes(service.id))
    ];
  }

  isServiceSelected(serviceId: string): boolean {
    return this.selectedServices.includes(serviceId);
  }

  async onSubmit(): Promise<void> {
    if (this.quoteForm.valid && this.selectedServices.length > 0) {
      try {
        const formData = {
          ...this.quoteForm.value,
          services: this.selectedServices,
          countryCode: this.selectedCountry?.dialCode || ''
        };

        await this.quoteService.addQuoteRequest(formData);
        // Réinitialiser le formulaire après succès
        this.quoteForm.reset();
        this.selectedServices = [];
        this.reorderServices();
        
        // Ajouter une notification de succès si nécessaire
        this.toastService.show('Votre demande de devis a été envoyée avec succès !');
      } catch (error) {
        console.error('Erreur lors de l\'envoi du devis:', error);
        this.toastService.show('Une erreur est survenue lors de l\'envoi de votre demande.');
      }
    }
  }
}