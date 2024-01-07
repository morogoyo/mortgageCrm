import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddClientComponent} from './add-client/add-client.component';
import {UpdateClientComponent} from './update-client/update-client.component';
import {RouterModule, Routes} from "@angular/router";
import {DeleteLeadsComponent} from "../leads/delete-leads/delete-leads.component";
import {DeleteClientComponent} from './delete-client/delete-client.component';
import {ViewClientComponentList} from './view-client-list/view-client-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientProfileComponent } from './client-profile/client-profile.component';
import {NgbDropdownModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {ClientAssetsModule} from "../client-assets/client-assets.module";
import {ViewClientAssetComponent} from "../client-assets/view-client-asset/view-client-asset.component";
import { ClientViewComponent } from './client-view/client-view.component';
import {EstimateModule} from "../billing/estimate/estimate.module";
import {BillingModule} from "../billing/billing.module";

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
    path: 'view',
    component: ViewClientComponentList,
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
  },
  {
    path: 'profile',
    component: ClientProfileComponent,
    children: [
      {
        path: 'app-client-profile',
        redirectTo: 'app-client-profile',
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
    ViewClientComponentList,
    ClientProfileComponent,
    ClientViewComponent,



  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    ClientAssetsModule,
    BillingModule

  ]
})
export class ClientModule {
}
