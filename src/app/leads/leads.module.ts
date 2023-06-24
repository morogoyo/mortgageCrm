import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import {RouterModule, Routes} from "@angular/router";
import {AppsComponent} from "../views/pages/apps/apps.component";
import {EmailComponent} from "../views/pages/apps/email/email.component";
import {InboxComponent} from "../views/pages/apps/email/inbox/inbox.component";
import {ReadComponent} from "../views/pages/apps/email/read/read.component";
import {ComposeComponent} from "../views/pages/apps/email/compose/compose.component";
import {ChatComponent} from "../views/pages/apps/chat/chat.component";
import {CalendarComponent} from "../views/pages/apps/calendar/calendar.component";

const routes: Routes = [
  {
    path: '',
    component: AddLeadsComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-leads',
        pathMatch: 'full',
      }
    ]
  }
]

@NgModule({
  declarations: [
    AddLeadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LeadsModule { }
