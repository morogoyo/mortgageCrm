import { Component, OnInit } from '@angular/core';
import {ClientDataService} from "../../services/internal/client/client-data.service";
import {ClientAssetService} from "../../services/clientAsset/client-asset.service";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  passedInClient: any;
  assetToDisplay: any;
  email: any;

  constructor(private assetData: ClientDataService, private clientAssetService: ClientAssetService, private assetDataService: ClientDataService) { }

  ngOnInit(): void {
     this.assetDataService.client.subscribe(data => {
         this.passedInClient = data;
     });
    this.viewAsset();

  }

viewAsset(){
    // console.log("asset component",this.passedInClient);
    // this.email = this.passedInClient.email;
    this.clientAssetService.viewAssetDetails(this.passedInClient.email).subscribe( data => {
       this.assetToDisplay = data;

    });
}
}
