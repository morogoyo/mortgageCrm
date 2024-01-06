import {Component, OnInit} from '@angular/core';
import {ClientAssetService} from "../../services/clientAsset/client-asset.service";
import {ClientDataService} from "../../services/internal/client/client-data.service";

@Component({
  selector: 'app-view-client-asset',
  templateUrl: './view-client-asset.component.html',
  styleUrls: ['./view-client-asset.component.scss']
})
export class ViewClientAssetComponent implements OnInit {
  assetsToDisplay: any[] = [];
  passedInClient: any;

  testEmail=["email1@example.com"];

  constructor(private clientAsset: ClientAssetService, private assetDataService: ClientDataService) {
  }
  ngOnInit(): void {
    this.assetDataService.client.subscribe(data => {
      this.passedInClient = data;
    });
    this.viewAssets();
    // console.log(this.assetsToDisplay);
  }

// TODO NEED TO FIGURE OUT WHY i MADE THIS COMPONENT AS THE ASSEST COMPONENT IS ALREADY DOING THE INTENDED JOB
// TODO NEED TO FIX BACK END RESPONSE TO ELIMINATE FRONT END BROWSER ERROR
  viewAssets(){
    // this.clientAsset.viewAssetDetails(this.passedInClient.email).subscribe( data => {
    this.clientAsset.viewAssetDetails(this.testEmail[0]).subscribe( data => {
      this.assetsToDisplay = data;
    });
  }



}
