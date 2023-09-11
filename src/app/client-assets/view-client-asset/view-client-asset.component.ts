import {Component, OnInit} from '@angular/core';
import {ClientAssetService} from "../../services/clientAsset/client-asset.service";
import {Asset} from "../../_shared/interfaces/asset";
import {AssetDataService} from "../../services/internal/client/asset-data.service";

@Component({
  selector: 'app-view-client-asset',
  templateUrl: './view-client-asset.component.html',
  styleUrls: ['./view-client-asset.component.scss']
})
export class ViewClientAssetComponent implements OnInit {
  assetsToDisplay: any[] = [];
  passedInClient: any;

  constructor(private clientAsset: ClientAssetService, private assetDataService: AssetDataService) {
  }
  ngOnInit(): void {
    this.assetDataService.client.subscribe(data => {
      this.passedInClient = data;
    });
    this.viewAssets();
    // console.log(this.assetsToDisplay);
  }



  viewAssets(){
    this.clientAsset.viewAssetDetails(this.passedInClient.email).subscribe( data => {
      this.assetsToDisplay = data;
    });
  }



}
