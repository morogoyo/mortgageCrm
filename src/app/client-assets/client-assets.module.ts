import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientAssetComponent } from './add-client-asset/add-client-asset.component';
import { ViewClientAssetComponent } from './view-client-asset/view-client-asset.component';



@NgModule({
  declarations: [
    AddClientAssetComponent,
    ViewClientAssetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientAssetsModule { }
