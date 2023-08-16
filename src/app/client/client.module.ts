import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddClientComponent} from './add-client/add-client.component';
import {UpdateClientComponent} from './update-client/update-client.component';
import {RouterModule, Routes} from "@angular/router";
import {DeleteLeadsComponent} from "../leads/delete-leads/delete-leads.component";
import {DeleteClientComponent} from './delete-client/delete-client.component';
import {ViewClientComponent} from './view-client/view-client.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'add',
    component: AddClientComponent,
    children: [
      {
        path: 'add-client',
        redirectTo: 'add-client',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    component: ViewClientComponent,
    children: [
      {
        path: 'view-client',
        redirectTo: 'view-client',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'delete',
    component: DeleteLeadsComponent,
    children: [
      {
        path: 'delete-client',
        redirectTo: 'delete-client',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'update',
    component: UpdateClientComponent,
    children: [
      {
        path: 'delete-client',
        redirectTo: 'delete-client',
        pathMatch: 'full',
      }
    ]
  }

]

@NgModule({
  declarations: [
    AddClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    ViewClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule {
}
