import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerLayoutsComponent } from '../../layouts/inner-layouts/inner-layouts.component';
import { DocuemntsDetailsComponent } from './docuemnts-details/docuemnts-details.component';
import { LoadDetailsComponent } from './load-details/load-details.component';
import { LoadDetailsExceptionalComponent } from './load-details-exceptional/load-details-exceptional.component';

const routes: Routes = [
  {
    path: '',
    component: InnerLayoutsComponent,
    children: [
      { 
        path: 'docuemnts-card-details/:id', 
        component: DocuemntsDetailsComponent,
        // Add a getPrerenderParams function that returns parameter values for prerendering
        providers: [
          {
            provide: 'getPrerenderParams',
            useValue: () => {
              // Return an array of parameter values to prerender
              // For example, prerender pages for IDs 1, 2, and 3
              return [
                { id: '1' },
                { id: '2' },
                { id: '3' }
                // Add more parameter values as needed
              ];
            }
          }
        ]
      },
      { 
        path: 'load-details/:id', 
        component: LoadDetailsComponent,
        // Add getPrerenderParams for this route too if needed
        providers: [
          {
            provide: 'getPrerenderParams',
            useValue: () => {
              return [
                { id: '1' },
                { id: '2' },
                { id: '3' }
                // Add more parameter values as needed
              ];
            }
          }
        ]
      },
      { 
        path: 'load-details-exceptional/:id', 
        component: LoadDetailsExceptionalComponent,
        // Add getPrerenderParams for this route too if needed
        providers: [
          {
            provide: 'getPrerenderParams',
            useValue: () => {
              return [
                { id: '1' },
                { id: '2' },
                { id: '3' }
                // Add more parameter values as needed
              ];
            }
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardListRoutingModule { }