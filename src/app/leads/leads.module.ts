import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddLeadsComponent} from './add-leads/add-leads.component';
import {RouterModule, Routes} from "@angular/router";
import {ViewLeadsComponent} from './view-leads/view-leads.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddLeadsComponent,
    children: [
      {
        path: 'add-leads',
        redirectTo: 'add-leads',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    component: ViewLeadsComponent,
    children: [
      {
        path: 'view-leads',
        redirectTo: 'view-leads',
        pathMatch: 'full',
      }
    ]
  },

]

@NgModule({
  declarations: [
    AddLeadsComponent,
    ViewLeadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LeadsModule { }
