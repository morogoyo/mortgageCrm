import { Component, OnInit } from '@angular/core';
import {AssetDataService} from "../../services/internal/client/asset-data.service";
import {ClientAssetService} from "../../services/clientAsset/client-asset.service";
import {Asset} from "../../_shared/interfaces/asset";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  passedInClient: any;
  assetToDisplay: Asset;
  email: any;

  constructor(private assetData: AssetDataService, private clientAssetService: ClientAssetService, private assetDataService: AssetDataService) { }

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
