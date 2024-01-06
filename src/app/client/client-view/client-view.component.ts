import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client/client.service";
import {ClientDataService} from "../../services/internal/client/client-data.service";

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  clientToDisplay: any;
  passedInClient: any;
  constructor(private clientService: ClientService, private assetDataService: ClientDataService) { }

  ngOnInit(): void {
    this.assetDataService.client.subscribe(data => {
      this.passedInClient = data;
    });
    this.viewClient();
  }


  viewClient(){
    this.clientService.viewClient(this.passedInClient).subscribe(data => {
        this.clientToDisplay = data;
        console.log(this.clientToDisplay);

    })
  }
}