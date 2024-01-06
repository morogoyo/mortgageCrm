import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientAssetComponent } from './add-client-asset/add-client-asset.component';
import { ViewClientAssetComponent } from './view-client-asset/view-client-asset.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AssetComponent } from './asset/asset.component';

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
  {
    path: 'asset',
    component: AssetComponent,
    children: [
      {
        path: 'asset',
        redirectTo: 'asset',
        pathMatch: 'full',
      }
    ]
  },
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
    ViewClientAssetComponent,
    AssetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewClientAssetComponent,
    AssetComponent
  ]
})
export class ClientAssetsModule { }
