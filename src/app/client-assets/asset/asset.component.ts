import { Component, OnInit } from '@angular/core';
import {AssetDataService} from "../../services/internal/client/asset-data.service";
import {ClientAssetService} from "../../services/clientAsset/client-asset.service";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  passedInClient: any;
  assetToDisplay: any;

  constructor(private assetData: AssetDataService, private clientAssetService: ClientAssetService) { }

  ngOnInit(): void {

    this.clientAssetService.viewAssetDetails().subscribe( data => {
      for (const details in data) {
        if (details == this.passedInClient.email){
          this.assetToDisplay = details;
        }
      }
    });





  }
}
