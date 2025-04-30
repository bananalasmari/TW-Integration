import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardListRoutingModule } from './card-list-routing.module';
import { DocuemntsDetailsComponent } from './docuemnts-details/docuemnts-details.component';
import { ViewLoadDataComponent } from './view-load-data/view-load-data.component';
import { LoadDetailsComponent } from './load-details/load-details.component';
import { ViewLoadDataExceptionalComponent } from './view-load-data-exceptional/view-load-data-exceptional.component';
import { LoadDetailsExceptionalComponent } from './load-details-exceptional/load-details-exceptional.component';



@NgModule({
  declarations: [
    DocuemntsDetailsComponent,
    ViewLoadDataComponent,
    LoadDetailsComponent,
    ViewLoadDataExceptionalComponent,
    LoadDetailsExceptionalComponent,
  ],
  imports: [
    CommonModule,
    CardListRoutingModule,
    TranslateModule
  ]
})
export class CardListModule { }
