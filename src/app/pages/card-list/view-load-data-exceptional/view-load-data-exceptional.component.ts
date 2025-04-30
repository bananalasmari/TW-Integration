import { Component } from '@angular/core';
import { BaseComponent } from '../../../_shared/components/base.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-load-data-exceptional',
  standalone: false,
  templateUrl: './view-load-data-exceptional.component.html',
  styleUrl: './view-load-data-exceptional.component.scss'
})
export class ViewLoadDataExceptionalComponent extends BaseComponent {

  isRtl: boolean = false;
  currentLang: string | any;
  
  carrierCards: any[] = [
    {
      id: 1,
      carrierCardsName: 'شركة الجميح لنقل البضائع',
      docNumber: '225361',
      driver_ID: '1094726366',
      plate: 'ج ب ب 4322',
      issue_date: '2025-01-10',
      release_by: '1000015626',
      issue_from: 'لا'
    },
    {
      id: 2,
      carrierCardsName: 'مؤسسة السريع للنقل البري',
      docNumber: '558923',
      driver_ID: '1083345678',
      plate: 'م ن د 7744',
      issue_date: '2024-11-05',
      release_by: '1000021345',
      issue_from: 'نعم'
    },
    {
      id: 3,
      carrierCardsName: 'شركة الرويس للنقليات',
      docNumber: '992341',
      driver_ID: '1078912345',
      plate: 'و ل س 9087',
      issue_date: '2025-03-18',
      release_by: '1000032987',
      issue_from: 'لا'
    },
    {
      id: 4,
      carrierCardsName: 'نقل الجنوب الحديث',
      docNumber: '334876',
      driver_ID: '1065567890',
      plate: 'س ك ر 1230',
      issue_date: '2024-12-25',
      release_by: '1000045123',
      issue_from: 'نعم'
    }
  ];

  constructor(private location: Location) {
    super();
  }

  ngOnInit(): void {
    this.isRtl = document.documentElement.getAttribute('dir') === 'rtl';
  }

  isRtlSet(): boolean {
    return document.documentElement.getAttribute('dir') === 'rtl';
  }
  get iconClass(): string {
    return this.isRtlSet() ? 'fa-light fa-angle-left me-4' : 'fa-light fa-angle-right me-4';
  }
  isArabic(): boolean {
    return this.currentLang === 'ar';
  }
  goBack(): void {
    this.location.back();
  }
}

