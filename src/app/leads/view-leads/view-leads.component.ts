import {Component, OnInit, TemplateRef} from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";
import {Leads} from "../../_shared/interfaces/leads";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss']
})
export class ViewLeadsComponent implements OnInit {
  constructor(private crudService: CrudService, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
  }

  leads: any;

  leadsToRemove: any;

  ids: number[] = [0];


  leadsToDisplay: Leads[] = [{id:0, fname: "" , lname:"", leadSource:"", email:"", message:"" ,phoneNumber:""}];

  filteredLeadsToDisplay : any[] = [];

  count: number = 0;


  basicModalCloseResult: string = '';


  ngOnInit(): void {
    // const dataTable = new DataTable("#leadsTable");
    this.getAllLeads();

  }

  getAllLeads() {
    this.crudService.viewAllLeads().subscribe((data) => {
      // console.log('this is the viewAllLeads() that is giving me shit ');
      // console.log(data);
      // console.log(data.leads.fname)
      this.leads = data;
    });
  }


  leadsToBeDeleted(lead: any, i: number) {

    var id = lead.target.getAttribute("id")
    console.log(id);
    // let displayId = this._indexCorrection(id);// correcting ids to be displayed in the modal
    if (!this.ids.includes(id)) {

      // console.log("incoming id to leadsToBeDeleted(id))", id);
      this.ids[id] = id; // Id's to be deleted addition
      // console.log("Id # that will be deleted", this.ids[id]);
      this.leadsToDisplay[i] = this.leads[i];
      this.count++;
    } else {
      delete this.ids[id];
      delete this.leadsToDisplay[i];
      this.count--;

    }
    console.log('ids from the method ', this.ids);
    console.log('ids from the method ', i);
    console.log('leads to display leadsToDisplay ', this.leadsToDisplay);
    console.log('leads to filterdlistToDisplay ', this.filteredLeadsToDisplay);

  }


  displayLeadToBeDeletedInModal() {
    console.log("leads display" ,this.leads)
    this.leadsToDisplay = this.leads.getAttribute("id");


   }

  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {
    });

  }


  removeLeads(){
    console.log(this.ids)
    let filtered = this.ids.filter(function (el) {
      return el != null;
    });



    // this.crudService.deleteLead(filtered).subscribe((data) => {console.log(data)})

    location.reload();

  //   this.router.navigate(['/leads']);
  }

    _indexCorrection(id: any): any
    {
      console.log(id)
    let newId: number;
      if(id != 0){
       return newId = (id + 1 - 1);

      }

    }

}


