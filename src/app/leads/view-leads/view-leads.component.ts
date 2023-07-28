import {Component, OnInit, TemplateRef} from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";
import {Leads} from "../../_shared/interfaces/leads";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {AddLeadsComponent} from "../add-leads/add-leads.component";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.scss']
})
export class ViewLeadsComponent implements OnInit {
  constructor(private crudService: CrudService, private modalService: NgbModal, private route: ActivatedRoute,
              private router: Router, private fb: FormBuilder) {
  }

  leads: any;

  leadsToRemove: any;

  ids: number[] = [0];


  // leadsToDisplay: Leads[] = [{id: 0, fname: "", lname: "", leadSource: "", email: "", message: "", phoneNumber: ""}];

  leadsToDisplay: Set<Leads> = new Set();

  filteredLeadsToDisplay: any[] = [];

  count: number = 0;


  basicModalCloseResult: string = '';


  ngOnInit(): void {
    // const dataTable = new DataTable("#leadsTable");
    this.getAllLeads();

  }

  getAllLeads() {
    this.crudService.viewAllLeads().subscribe((data) => {
      this.leads = data;
    });
  }


  leadsToBeDeleted(lead: any, i: number) {

    let id = lead.target.getAttribute("id")
    console.log(id);
    if (!this.ids.includes(id)) {

      this._addLeadToCount(id, i)

    } else {

      this._deleteLeadFromCount(id, i)

    }

  }


  displayLeadToBeDeletedInModal() {



     }

  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {
    });

  }


  removeLeads() {
    console.log(this.ids)
    let filtered = this.ids.filter(function (el) {
      return el != null;
    });
    this.crudService.deleteLead(filtered).subscribe((data) => {
      console.log(data)
    })


    this._redirectToLeads()
  }

  addedLead: any;

  contactForm = this.fb.group({
    fname: [''],
    lname: [''],
    email: [''],
    leadSource: [''],
    phoneNumber: [''],
  });

  preview: String

  onSubmit() {
    // this.preview = JSON.stringify(this.contactForm.value);
    this.crudService.addLead(this.contactForm.value).subscribe((leadToSave) => {
        console.log(leadToSave);
        this.addedLead = leadToSave;

      }
    );

    this._redirectToLeads();
  }

  _addLeadToCount(id: any, i: any){
    // console.log("incoming id to leadsToBeDeleted(id))", id);
    this.ids[id] = id; // Id's to be deleted addition
    // console.log("Id # that will be deleted", this.ids[id]);
    this.leadsToDisplay.add(this.leads[i]);
    this.count++;
  }
  _deleteLeadFromCount(id: any, i: any){
    delete this.ids[id];
    // delete this.leadsToDisplay[i];
    this.leadsToDisplay.delete(this.leads[i]);
    this.count--;
  }

  _redirectToLeads() {
    location.reload();
    this.router.navigate(['/leads']);
  }
}


