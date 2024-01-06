import { Component, OnInit } from '@angular/core';
import {AssetDataService} from "../../services/internal/client/asset-data.service";
import {ClientAssetService} from "../../services/clientAsset/client-asset.service";
import {ViewClientAssetComponent} from "../../client-assets/view-client-asset/view-client-asset.component";
import {ViewClientComponent} from "../view-client/view-client.component";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  passedInClient: any;



  assetToDisplay: any;
  email: any;
  constructor(private assetDataTransfer: AssetDataService, private clientAssetService: ClientAssetService ) { }

  ngOnInit(): void {
    this.assetDataTransfer.client.subscribe(data => {
      this.passedInClient = data;
      console.log(this.passedInClient);
    });
    // this.viewClientAsset.viewAssets();
    console.log(this.passedInClient);

  }

  viewAssets(){

  }

}
