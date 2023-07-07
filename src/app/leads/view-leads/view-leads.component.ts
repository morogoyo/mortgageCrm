import {Component, OnInit} from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";
import {Leads} from "../../_shared/interfaces/leads";
import {DataTable} from "simple-datatables";

@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss']
})
export class ViewLeadsComponent implements OnInit {


  constructor(private crudService: CrudService) {
  }

  leads: any;

  leadsToRemove: Leads;

  ngOnInit(): void {
    // const dataTable = new DataTable("#leadsTable");
    this.getAllLeads()

  }

  getAllLeads() {
    this.crudService.viewAllLeads().subscribe((data) => {
      console.log('this is the viewAllLeads() that is giving me shit ');
      console.log(data);
      // console.log(data.leads.fname)
      this.leads = data;
    });
  }

  updateLeadsToRemove(){
    this.leadsToRemove =
  }

  deleteLeads(leads: Leads){
    leadsToRemove
  }
}


