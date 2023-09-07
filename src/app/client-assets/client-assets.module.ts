import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientAssetComponent } from './add-client-asset/add-client-asset.component';
import { ViewClientAssetComponent } from './view-client-asset/view-client-asset.component';
import {RouterModule, Routes} from "@angular/router";
import {AddClientComponent} from "../client/add-client/add-client.component";
import {ViewClientComponent} from "../client/view-client/view-client.component";
import {DeleteLeadsComponent} from "../leads/delete-leads/delete-leads.component";
import {UpdateClientComponent} from "../client/update-client/update-client.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ViewClientAssetComponent,
    children: [
      {
        path: 'view-client-asset',
        redirectTo: 'view-client-asset',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'add',
    component: AddClientAssetComponent,
    children: [
      {
        path: 'add-client-asset',
        redirectTo: 'add-client-asset',
        pathMatch: 'full',
      }
    ]
  },
  // {
  //   path: 'delete',
  //   component: DeleteLeadsComponent,
  //   children: [
  //     {
  //       path: 'delete-client',
  //       redirectTo: 'delete-client',
  //       pathMatch: 'full',
  //     }
  //   ]
  // },
  // {
  //   path: 'update',
  //   component: UpdateClientComponent,
  //   children: [
  //     {
  //       path: 'delete-client',
  //       redirectTo: 'delete-client',
  //       pathMatch: 'full',
  //     }
  //   ]
  // }

]

@NgModule({
  declarations: [
    AddClientAssetComponent,
    ViewClientAssetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientAssetsModule { }
