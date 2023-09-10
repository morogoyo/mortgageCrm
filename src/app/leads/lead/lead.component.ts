import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CrudService} from "../../services/leads/crud.service";
import {Leads} from "../../_shared/interfaces/leads";
import {LeadDataService} from "../../services/internal/lead/lead-data.service";
import {ClientService} from "../../services/client/client.service";
import {Router} from "@angular/router";
import {AddLeadsComponent} from "../add-leads/add-leads.component";

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {

  passedInLead: any;


  constructor(private LeadData: LeadDataService, private toClient: ClientService, private router: Router, private leadService: CrudService) { }

  ngOnInit(): void {
  this.LeadData.lead.subscribe(data => {
    this.passedInLead = data;
  })
  }

  //Save lead to Client
  convertToClient(){
  this.toClient.addClient(this.passedInLead).subscribe(); //Save lead to Client
    this.passedInLead.isClient = true
    console.log(this.passedInLead.isClient);
    this.leadService.updateLead(this.passedInLead).subscribe();
    // TODO need to create update controller for leads so that I can switch the boolean value per lead
    // this.addLeads.addedLead(this.passedInLead);
    this.router.navigate(['/client'])
      .then(() => {
        window.location.reload();
      });

}


}
