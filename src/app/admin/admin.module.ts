import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkWithHref, Routes} from "@angular/router";
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

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLinkWithHref
  ]
})
export class AdminModule { }
