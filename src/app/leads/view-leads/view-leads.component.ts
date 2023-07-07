import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CrudService} from "../../services/leads/crud.service";

@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss']
})
export class ViewLeadsComponent implements OnInit {



  constructor(private crudService: CrudService) {
  }

  leads: Subscription;
  ngOnInit(): void {

    this.leads = this.crudService.viewAllLeads().subscribe();

  }

}
