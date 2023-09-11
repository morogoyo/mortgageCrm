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

  constructor(private clientAsset: ClientAssetService, private assetDataService: AssetDataService) {
  }
  ngOnInit(): void {
    this.viewAssets();
    // console.log(this.assetsToDisplay);
  }

  this.assetDataService.client.

  viewAssets(){
    this.clientAsset.viewAssetDetails().subscribe( data => {
      this.assetsToDisplay = data;
    });
  }



}
