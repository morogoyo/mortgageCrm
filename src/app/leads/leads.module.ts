import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddLeadsComponent} from './add-leads/add-leads.component';
import {RouterModule, Routes} from "@angular/router";
import {ViewLeadsComponent} from './view-leads/view-leads.component';
import { DeleteLeadsComponent } from './delete-leads/delete-leads.component';
import {ModalComponent} from "../views/pages/ui-components/modal/modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
  {
    path: 'delete',
    component: DeleteLeadsComponent,
    children: [
      {
        path: 'delete-view',
        redirectTo: 'delete-view',
        pathMatch: 'full',
      }
    ]
  },
  // {
  //   path: 'delete',
  //   component: DeleteLeadsComponent,
  //   children: [
  //     {
  //       path: 'delete-view',
  //       redirectTo: 'delete-view',
  //       pathMatch: 'full',
  //     }
  //   ]
  // },

]

@NgModule({
  declarations: [
    AddLeadsComponent,
    ViewLeadsComponent,
    DeleteLeadsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule


    ]
})
export class LeadsModule { }
