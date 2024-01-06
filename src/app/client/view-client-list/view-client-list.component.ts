import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../../services/client/client.service";
import {Clients} from "../../_shared/interfaces/clients";
import {AssetDataService} from "../../services/internal/client/asset-data.service";

@Component({
  selector: 'app-view-client-list',
  templateUrl: './view-client-list.component.html',
  styleUrls: ['./view-client-list.component.scss']
})
export class ViewClientComponentList implements OnInit {

  ngOnInit(): void {
    // const dataTable = new DataTable("#leadsTable");
    this.getAllClients();

  }

  constructor(private crudService: ClientService, private modalService: NgbModal, private route: ActivatedRoute,
              private router: Router, private fb: FormBuilder, private assetData: AssetDataService) {
  }

  ///////////////////////////////////////////////////////////////////////////////

  clients: any;

  clientsToRemove: any;

  ids: number[] = [0];

  clientsToDisplay: Set<Clients> = new Set();

  filteredLeadsToDisplay: any[] = [];

  count: number = 0;

  basicModalCloseResult: string = '';

  clientToPassIn: any;


  getAllClients() {
    this.crudService.viewAllClients().subscribe((data) => {
      this.clients = data;
    });
  }


  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {
    });

  }

  addedClient: any;

  contactForm = this.fb.group({
      id: [''],
      email: [''],
      fname: [''],
      lname: [''],
      address: [''],
      zip: [''],
      city: [''],
      state: [''],
      phoneNumber: [''],
      birthDay: [''],
      jobTitle: [''],
      demographicInfo: [''],
      companyName: [''],

      maritalStatus: [''],
      numberOfChildren: [''],
      createdDate: [''],
      updateDate: ['']
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
    this.clientsToDisplay.add(this.clients[i]);
    this.count++;
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


  removeClients() {
    console.log(this.ids)
    let filtered = this.ids.filter(function (el) {
      return el != null;
    });
    console.log(filtered);
    this.crudService.deleteClient(filtered).subscribe((data) => {
      console.log(data)
    })
    // this._redirectToClients()
  }
  _deleteClientFromCount(id: any, i: any){
    delete this.ids[id];
    // delete this.leadsToDisplay[i];
    this.clientsToDisplay.delete(this.clients[i]);
    this.count--;
  }

  _redirectToClients() {
    location.reload();
    this.router.navigate(['/clients']);
  }

  //Asset Data Service
  clientDataTransfer(client: any) {
    this.clientToPassIn = client;
    console.log("view client component",this.clientToPassIn);
    this.assetData.clientInfo(this.clientToPassIn);
  }

}
