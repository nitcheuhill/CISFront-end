import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services-grid',
  imports: [CommonModule],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss'
})
export class ServicesGridComponent {
  services = [
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (11).png',
      title: 'Climatisation, Ventilation, Désenfumage',
      subServices: [
        'Conditionnement d\'air résidentiel et commercial',
        'Conditionnement d\'air des centres de données (data center)',
        'Refroidissement des process industriels'
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (12).png',
      title: 'Energie Electrique',
      subServices: [
        'Courant fort (basse, moyenne et haute tension)',
        'Traitement d\'énergie électrique (stabilisation, stockage, et filtrage)',
        'Courant faible (sécurité incendie, alarme d\'intrusion, sonorisation et télécommunication)'
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (13).png',
      title: 'Energie Renouvelable',
      subServices: [
        'Production photovoltaïque',
        'Production éolienne',
        'Énergie hydraulique, géothermique et biomasse'
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (14).png',
      title: 'Infrastructure de plomberie',
      subServices: [
        'Systèmes d\'installations sanitaires domestique et industriel',
        'Systèmes de distribution de gaz résidentiel et collectif',
        'Systèmes de production et distribution d\'air comprimé',
        'Systèmes de distribution des fluides industriel'
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (15).png',
      title: 'Production d\'énergie électrique',
      subServices: [
        'Groupe électrogène à combustion (essence, gasoil et gaz)'
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (16).png',
      title: 'Infrastructure de lutte contre l\'incendie',
      subServices: [
        'Désenfumage',
        'Auto-extinction de feu',
        'Extinction manuelle de feu'
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (19).png',
      title: 'Infrastructure de lutte contre l\'incendie',
      subServices: [
        'Equipement mécanique de transport et de levage',
        'Ascenseur',
        'Monte-charge',
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (17).png',
      title: 'Production et traitement de l\'eau',
      subServices: [
        ' Captage, pompage, filtrage et stockage',
        'Epuration et dépollution'
      ]
    },
    {
      icon: '/icons/IconsServicesGrid/Calque_1 (18).png',
      title: 'Equipements spécifiques',
      subServices: [
        ' Systèmes de conservation par le froid',
        ' Systèmes de production de la vapeur',
        'Systèmes de production, traitement et  stockage d’eau chaude'
      ]
    },
    
  ];

}
