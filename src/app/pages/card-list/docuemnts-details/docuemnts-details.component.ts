import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../../_shared/components/base.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-docuemnts-details',
  standalone: false,
  templateUrl: './docuemnts-details.component.html',
  styleUrl: './docuemnts-details.component.scss'
})
export class DocuemntsDetailsComponent extends BaseComponent implements OnInit {

  dynamicUrl: string = '';
  currentLang: string | any;
  id: string | null = null;
  operationCard?: any;
  
  // Add a signal to store the component type
  cardType = signal<string>('normal');

  constructor(private route: ActivatedRoute, private location: Location){
    super();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    // Fetch card details when the component initializes
    if (this.id) {
      this.fetchCardDetails(this.id);
    }
  }

  // Method to fetch card details
  fetchCardDetails(id: string): void {
    // This would typically be a service call
    // For demonstration, using sample data
    const carrierCards = [
      {
        id: "1",
        carrierCardsName: 'شركة الجميح لنقل البضائع',
        docNumber: '225361',
        driver_ID: '1094726366',
        plate: 'ج ب ب 4322',
        issue_date: '2025-01-10',
        release_by: '1000015626',
        issue_from: 'لا',
        type: 'normal'
      },
      {
        id: "2",
        carrierCardsName: 'مؤسسة السريع للنقل البري',
        docNumber: '558923',
        driver_ID: '1083345678',
        plate: 'م ن د 7744',
        issue_date: '2024-11-05',
        release_by: '1000021345',
        issue_from: 'نعم',
        type: 'exceptional'
      }
    ];

    // Find the card with the matching ID
    this.operationCard = carrierCards.find(card => card.id === id);
    
    // Set the card type signal based on the fetched data
    if (this.operationCard) {
      this.cardType.set(this.operationCard.type);
    }
  }

  isArabic(): boolean {
    return this.currentLang === 'ar';
  }
  
  goBack(): void {
    this.location.back();
  }
}