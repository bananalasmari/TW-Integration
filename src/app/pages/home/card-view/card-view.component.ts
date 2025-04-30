import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from '../../../_shared/components/base.component';
import { UserService } from '../../../_shared/services/user-service.service';

@Component({
  selector: 'app-card-view',
  standalone: false,
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent extends BaseComponent implements OnInit {
  
  activeIndex = 0;
  showMultipleCards = false;
  private touchStartX = 0;
  private touchEndX = 0;
  private swipeThreshold = 50;
  isModalOpen = false;
  isImageModalOpen = false;  // Added for image modal
  selectedCard: any;
  selectedcarrierCard: any;   // Added for image modal
  userFullName: string = 'عبدالله القحطاني';
  carrierCards: any[] = [];
  isDataLoaded = false; // Track if data has been loaded
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: object, 
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    super();
    // Initialize with empty array to prevent undefined errors
    this.carrierCards = [];
    console.log('CardViewComponent constructed');
  }
  
  ngOnInit(): void {
    console.log('CardViewComponent initialized');
    
    // Log current language for debugging
    console.log('Current language from BaseComponent:', this.currentLanguage);
    
    // Directly populate with hard-coded data first thing
    this.populateHardCodedData();
    
    // Then fetch user full name
    this.fetchUserFullName();
    
    // Mark for check one more time
    setTimeout(() => {
      // console.log('Final check - carrier cards count:', this.carrierCards.length);
      // Force Angular to check for changes again
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }, 200);
  }
  
  populateHardCodedData(): void {
    console.log('Populating hard-coded data...');
    
    // Explicitly create and push each card object
    const card1 = {
      id: 1,
      carrierFirstName: 'سعود ناصر الدوسري',
      nationalID: '1012345678',
      expiryDate: '2026-03-10',
      facility_number: '83492017',
    };
    
    const card2 = {
      id: 2,
      carrierFirstName: 'عبدالله خالد المطيري',
      nationalID: '1087654321',
      expiryDate: '2027-07-22',
      facility_number: '29837465',
    };
    
    const card3 = {
      id: 3,
      carrierFirstName: 'فهد حمد الشهراني',
      nationalID: '1078912345',
      expiryDate: '2025-11-05',
      facility_number: '71628394',
    };
    
    // Ensure the array is fresh
    this.carrierCards = [];
    
    // Add the cards
    this.carrierCards.push(card1);
    this.carrierCards.push(card2);
    this.carrierCards.push(card3);
    
    // Log the data to debug
    console.log('Hard-coded data loaded. Number of cards:', this.carrierCards.length);
    console.log('Cards data:', JSON.stringify(this.carrierCards));
    
    // Set loaded flag and force change detection
    this.isDataLoaded = true;
    this.cdr.detectChanges();
    
    // Double-check after a short delay
    setTimeout(() => {
      // console.log('After timeout - carrier cards count:', this.carrierCards.length);
      // console.log('Is data loaded flag:', this.isDataLoaded);
      this.cdr.detectChanges();
    }, 100);
  }
  
  fetchUserFullName(): void {
    if (this.userService) {
      this.userService.getUserFullName()
        .then((name) => {
          if (name) {
            this.userFullName = name;
            this.cdr.detectChanges();
          }
        })
        .catch((error) => {
          console.error('Error fetching user full name:', error);
        });
    }
  }
  
  // Debounced swipe handling to reduce rapid swipe events
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    if (isPlatformBrowser(this.platformId)) {
      this.touchStartX = event.changedTouches[0].screenX;
    }
  }
  
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    if (isPlatformBrowser(this.platformId)) {
      this.touchEndX = event.changedTouches[0].screenX;
      this.handleSwipe();
    }
  }
  
  handleSwipe(): void {
    const swipeDistance = this.touchStartX - this.touchEndX;
    
    if (swipeDistance > this.swipeThreshold) {
      this.nextCard();
    } else if (swipeDistance < -this.swipeThreshold) {
      this.prevCard();
    }
  }
  
  // Navigation methods
  nextCard() {
    if (this.carrierCards && this.carrierCards.length > 0) {
      this.activeIndex = (this.activeIndex + 1) % this.carrierCards.length;
      this.cdr.detectChanges();
    }
  }
  
  prevCard() {
    if (this.carrierCards && this.carrierCards.length > 0) {
      this.activeIndex = (this.activeIndex - 1 + this.carrierCards.length) % this.carrierCards.length;
      this.cdr.detectChanges();
    }
  }
  
  goToCard(index: number) {
    if (this.carrierCards && index >= 0 && index < this.carrierCards.length) {
      this.activeIndex = index;
      this.cdr.detectChanges();
    }
  }
  
  // Caching transformation styles for better performance
  getTransform(index: number): string {
    if (this.showMultipleCards) {
      const offset = (this.activeIndex - index) * 90;
      const scale = index === this.activeIndex ? 1 : 0.9;
      return `translateX(${offset}%) scale(${scale})`;
    } else {
      const offset = (this.activeIndex - index) * 100;
      return `translateX(${offset}%)`;
    }
  }
  
  // Modal handling
  openModal(card: any) {
    this.selectedCard = card;
    this.isModalOpen = true;
    this.cdr.detectChanges();
  }
  
  closeModal() {
    this.isModalOpen = false;
    this.cdr.detectChanges();
  }
  
  // Image Modal handling
  openImageModal(card: any) {
    this.selectedcarrierCard = card;
    this.isImageModalOpen = true;
    // Prevent event bubbling to parent elements
    this.cdr.detectChanges();
  }
  
  closeImageModal() {
    this.isImageModalOpen = false;
    this.cdr.detectChanges();
  }
  
  // Download card image functionality
  downloadCardImage() {
    if (this.selectedcarrierCard && this.selectedcarrierCard.imageUrl) {
      // Create a temporary link element
      const link = document.createElement('a');
      
      // Set attributes for download
      link.href = this.selectedcarrierCard.imageUrl;
      link.download = `carrier-card-${this.selectedcarrierCard.nationalID}.jpg`;
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // If no image URL is available, use the fallback image
      console.warn('No image URL available for download');
      // Could implement a fallback download here or show a message
    }
  }
  
  // Debug methods
  getcarrierCardsCount(): number {
    const count = this.carrierCards ? this.carrierCards.length : 0;
    console.log('getcarrierCardsCount called, returning:', count);
    return count;
  }
  
  hascarrierCards(): boolean {
    const result = Array.isArray(this.carrierCards) && this.carrierCards.length > 0;
    console.log('hascarrierCards called, returning:', result);
    console.log('Current carrierCards:', this.carrierCards);
    return result;
  }
}