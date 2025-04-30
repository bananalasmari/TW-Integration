import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../../_shared/components/base.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-load-details',
  standalone: false,
  templateUrl: './load-details.component.html',
  styleUrl: './load-details.component.scss'
})
export class LoadDetailsComponent extends BaseComponent implements OnInit {
  dynamicUrl: string = '';
  currentLang: string | any;
  id: string | null = null;
  operationCard?: any;

  constructor(private route: ActivatedRoute, private location: Location){
    super();
  }
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
  ];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  isArabic(): boolean {
    return this.currentLang === 'ar';
  }
  goBack(): void {
    this.location.back();
  }
}




