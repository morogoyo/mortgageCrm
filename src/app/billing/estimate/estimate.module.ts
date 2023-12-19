import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEstimateComponent } from './view-estimate/view-estimate.component';
import { AddEstimateComponent } from './add-estimate/add-estimate.component';
import { UpdateEstimateComponent } from './update-estimate/update-estimate.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ViewEstimateComponent,
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
    ViewEstimateComponent,
    AddEstimateComponent,
    UpdateEstimateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EstimateModule { }
