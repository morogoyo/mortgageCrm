import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkWithHref, Routes} from "@angular/router";
import {AddLinkComponent} from "./asset-link/add-link/add-link.component";
import {ViewLinkComponent} from "./asset-link/view-link/view-link.component";
import {DeleteLinkComponent} from "./asset-link/delete-link/delete-link.component";
import {UpdateLinkComponent} from "./asset-link/update-link/update-link.component";
import {FormsModule} from "@angular/forms";


// const routes: Routes = [
//   {
//     path: 'add',
//     component: AddLinkComponent,
//     children: [
//       {
//         path: 'add-client',
//         redirectTo: 'add-client',
//         pathMatch: 'full',
//       }
//     ]
//   },
//   {
//     path: '',
//     component: ViewLinkComponent,
//     children: [
//       {
//         path: 'view-client',
//         redirectTo: 'view-client',
//         pathMatch: 'full',
//       }
//     ]
//   },
//   {
//     path: 'delete',
//     component: DeleteLinkComponent,
//     children: [
//       {
//         path: 'delete-client',
//         redirectTo: 'delete-client',
//         pathMatch: 'full',
//       }
//     ]
//   },
//   {
//     path: 'update',
//     component: UpdateLinkComponent,
//     children: [
//       {
//         path: 'delete-client',
//         redirectTo: 'delete-client',
//         pathMatch: 'full',
//       }
//     ]
//   }
//
// ]

@NgModule({
  declarations: [
    AddLinkComponent,
    ViewLinkComponent,
    DeleteLinkComponent,
    UpdateLinkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkWithHref
  ]
})
export class AdminModule { }
