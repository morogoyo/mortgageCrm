import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BaseComponent} from "../views/layout/base/base.component";
import {AuthGuard} from "../core/guard/auth.guard";
import {ErrorPageComponent} from "../views/pages/error-page/error-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  // {path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'estimate',
        loadChildren: () => import('./estimate/estimate.module').then(m => m.EstimateModule)
      },{
        path: 'line-item',
        loadChildren: () => import('./line-item/line-item.module').then(m => m.LineItemModule)
      },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BillingModule { }
