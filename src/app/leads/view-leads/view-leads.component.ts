import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";
import {Leads} from "../../_shared/interfaces/leads";
import {DataTable} from "simple-datatables";
import {DeleteLeadsComponent} from "../delete-leads/delete-leads.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddLeadsComponent} from "../add-leads/add-leads.component";


@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss']
})
export class ViewLeadsComponent implements OnInit {


  constructor(private crudService: CrudService, private modalService: NgbModal) {
  }

  leads: any;

  leadsToRemove: Leads;

  ids: number[] = [];

  basicModalCloseResult: string = '';


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

  updateLeadsToRemove() {
    // this.leadsToRemove =
  }

  deleteLeads(lead: any) {

    console.log(lead.target.getAttribute("id"));

    let index = (lead.target.getAttribute("id") - 1);

    if (!this.ids.includes(lead.target.getAttribute("id"))) {
      this.ids.push(lead.target.getAttribute("id"));
      this.ids.sort();
    } else {
      this.ids.sort();
      delete this.ids[index];
      this.ids = this.ids.filter(function (id) {
        return id != null;
      })

    }



    console.log(this.ids);
  }

  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {
    });

  }
}


