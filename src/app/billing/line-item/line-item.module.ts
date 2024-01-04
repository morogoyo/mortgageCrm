import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLineItemComponent } from './add-line-item/add-line-item.component';
import {RouterModule, Routes} from "@angular/router";
import {ViewEstimateComponent} from "../estimate/view-estimate/view-estimate.component";
import {AddEstimateComponent} from "../estimate/add-estimate/add-estimate.component";
import {UpdateEstimateComponent} from "../estimate/update-estimate/update-estimate.component";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateLineItemComponent } from './update-line-item/update-line-item.component';
import { ViewLineItemComponent } from './view-line-item/view-line-item.component';

const routes: Routes = [
  {
    path: '',
    component: ViewLineItemComponent,
    children: [
      {
        path: 'app-view-line-item',
        redirectTo: 'app-view-line-item',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'add',
    component: AddLineItemComponent,
    children: [
      {
        path: 'app-add-line-item',
        redirectTo: 'app-add-line-item',
        pathMatch: 'full',
      }
    ]
  },
  // {
  //   path: 'asset',
  //   component: AssetComponent,
  //   children: [
  //     {
  //       path: 'asset',
  //       redirectTo: 'asset',
  //       pathMatch: 'full',
  //     }
  //   ]
  // },
  {
    path: 'update',
    component: UpdateEstimateComponent,
    children: [
      {
        path: 'app-update-estimate',
        redirectTo: 'app-update-estimate',
        pathMatch: 'full',
      }
    ]
  }

]

@NgModule({
  declarations: [
    AddLineItemComponent,
    UpdateLineItemComponent,
    ViewLineItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class LineItemModule { }
