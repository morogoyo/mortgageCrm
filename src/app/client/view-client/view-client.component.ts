import {Component, OnInit, TemplateRef} from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Leads} from "../../_shared/interfaces/leads";
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  ngOnInit(): void {
    // const dataTable = new DataTable("#leadsTable");
    this.getAllClients();

  }

  constructor(private crudService: ClientService, private modalService: NgbModal, private route: ActivatedRoute,
              private router: Router, private fb: FormBuilder) {
  }

  ///////////////////////////////////////////////////////////////////////////////

  clients: any;

  clientsToRemove: any;

  ids: number[] = [0];

  clientsTodDisplay: Set<Leads> = new Set();

  filteredLeadsToDisplay: any[] = [];

  count: number = 0;

  basicModalCloseResult: string = '';




  getAllClients() {
    this.crudService.viewAllClients().subscribe((data) => {
      this.clients = data;
    });
  }


  deleteClient(client: any, i: number) {

    let id = client.target.getAttribute("id")
    console.log(id);
    if (!this.ids.includes(id)) {

      this._addClientToCount(id, i)

    } else {

      this._deleteClientFromCount(id, i)

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


  removeClients() {
    console.log(this.ids)
    let filtered = this.ids.filter(function (el) {
      return el != null;
    });
    this.crudService.deleteClient(filtered).subscribe((data) => {
      console.log(data)
    })


    this._redirectToClients()
  }

  addedClient: any;

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
    this.crudService.addClient(this.contactForm.value).subscribe((clientToSave) => {
        console.log(clientToSave);
        this.addedClient = clientToSave;

      }
    );

    this._redirectToClients();
  }

  _addClientToCount(id: any, i: any){
    // console.log("incoming id to leadsToBeDeleted(id))", id);
    this.ids[id] = id; // Id's to be deleted addition
    // console.log("Id # that will be deleted", this.ids[id]);
    this.clientsTodDisplay.add(this.clients[i]);
    this.count++;
  }
  _deleteClientFromCount(id: any, i: any){
    delete this.ids[id];
    // delete this.leadsToDisplay[i];
    this.clientsTodDisplay.delete(this.clients[i]);
    this.count--;

  }

  _redirectToClients() {
    location.reload();
    this.router.navigate(['/clients']);
  }




}
