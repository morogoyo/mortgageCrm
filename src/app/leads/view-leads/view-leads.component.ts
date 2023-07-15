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

  ids: number[] = [0];

  leadsToDisplay: Leads[] = [{id:0, fname: "" , lname:"", leadSource:"", email:"", message:"" ,phoneNumber:""}];

  // leadsToDisplay: Leads[];
  basicModalCloseResult: string = '';


  ngOnInit(): void {
    // const dataTable = new DataTable("#leadsTable");
    this.getAllLeads();

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

  leadsToBeDeleted(lead: any) {

    console.log(lead.target.getAttribute("id")+" this is the id from the event emmiter ");

    let id = lead.target.getAttribute("id")
    // let id = lead.target.

    if (!this.ids.includes(id)) {
      console.log(id)
      this.ids[id] = id;
      console.log(this.ids[id])
      this.displayLeadToBeDeletedInModal(id);
    } else {
      delete this.ids[id];
      delete this.leadsToDisplay[id];

    }
    // console.log(this.ids);
    // console.log(this.leadsToDisplay);

  }


  displayLeadToBeDeletedInModal(currentId: number){
    console.log(currentId)
    // this.leadsToDisplay[0] = {id:"", fname: "" , lname:"", leadSource:"", email:"", message:"" ,phoneNumber:""};
    this.leadsToDisplay[currentId] = this.leads[currentId - 1];
    console.log(this.leads[currentId -1])
            console.log(this.leadsToDisplay);
     }




  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {
    });

  }
}


