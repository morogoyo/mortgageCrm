import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLinkComponent } from './add-link/add-link.component';
import { DeleteLinkComponent } from './delete-link/delete-link.component';
import { UpdateLinkComponent } from './update-link/update-link.component';
import { ViewLinkComponent } from './view-link/view-link.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'add',
    component: AddLinkComponent,
    children: [
      {
        path: 'app-add-link',
        redirectTo: 'app-add-link',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    component: ViewLinkComponent,
    children: [
      {
        path: 'app-view-link',
        redirectTo: 'app-view-link',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'delete',
    component: DeleteLinkComponent,
    children: [
      {
        path: 'app-delete-link',
        redirectTo: 'app-delete-link',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'update',
    component: UpdateLinkComponent,
    children: [
      {
        path: 'app-delete-link',
        redirectTo: 'app-delete-link',
        pathMatch: 'full',
      }
    ]
  }

]

@NgModule({
  declarations: [
    AddLinkComponent,
    DeleteLinkComponent,
    UpdateLinkComponent,
    ViewLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AssetLinksModule { }
