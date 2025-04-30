import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InnerLayoutsComponent } from './layouts/inner-layouts/inner-layouts.component';
import { OuterLayoutsComponent } from './layouts/outer-layouts/outer-layouts.component';
import { DocuemntsListComponent } from './pages/docuemnts-list/docuemnts-list.component';
const routes: Routes = [
  {
    path: '',
    component: OuterLayoutsComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: '',
    component: InnerLayoutsComponent,
    children: [
      { path: 'docuemnts-list', component: DocuemntsListComponent },
    ]
  },
  { path: 'card-list', loadChildren: () => import('./pages/card-list/card-list.module').then(m => m.CardListModule) },
  { path: '**', redirectTo: '' }  // Wildcard route for 404 - redirect to home or any other component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}