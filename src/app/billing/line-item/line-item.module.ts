import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLineItemComponent } from './add-line-item/add-line-item.component';
import {RouterModule, Routes} from "@angular/router";
import {ViewEstimateListComponent} from "../estimate/view-estimate-list/view-estimate-list.component";
import {AddEstimateComponent} from "../estimate/add-estimate/add-estimate.component";
import {UpdateEstimateComponent} from "../estimate/update-estimate/update-estimate.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ViewEstimateListComponent,
    children: [
      {
        path: 'app-view-estimate',
        redirectTo: 'app-view-estimate',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'add',
    component: AddEstimateComponent,
    children: [
      {
        path: 'app-add-estimate',
        redirectTo: 'app-add-estimate',
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
    AddLineItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class LineItemModule { }
