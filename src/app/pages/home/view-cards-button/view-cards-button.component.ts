import { Component } from '@angular/core';

@Component({
  selector: 'app-view-cards-button',
  standalone: false,
  templateUrl: './view-cards-button.component.html',
  styleUrl: './view-cards-button.component.scss'
})
export class ViewCardsButtonComponent {
  isRtl: boolean = false;  
  currentLang: string | any;
  isRtlSet(): boolean {
    return document.documentElement.getAttribute('dir') === 'rtl';
  }
  get iconClass(): string {
    return this.isRtlSet() ? 'fa-light fa-angle-left me-4' : 'fa-light fa-angle-right me-4';
  }

  isArabic(): boolean {
    return this.currentLang === 'ar';
  }
}
