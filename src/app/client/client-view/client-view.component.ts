import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client/client.service";
import {AssetDataService} from "../../services/internal/client/asset-data.service";
import {Clients} from "../../_shared/interfaces/clients";

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  clientToDisplay: Clients;
  passedInClient: any;
  constructor(private clientService: ClientService, private assetDataService: AssetDataService) { }

  ngOnInit(): void {
    this.assetDataService.client.subscribe(data => {
      this.passedInClient = data;
    });
    this.viewClient();
  }


  viewClient(){
    // let email = this.passedInClient.email
    this.clientService.viewClient(this.passedInClient).subscribe(data => {
        this.clientToDisplay = data;
        console.log(this.clientToDisplay);

    })
  }
}
