import {Component, OnInit} from '@angular/core';
import {ClientAssetService} from "../../services/clientAsset/client-asset.service";
import {Asset} from "../../_shared/interfaces/asset";

@Component({
  selector: 'app-view-client-asset',
  templateUrl: './view-client-asset.component.html',
  styleUrls: ['./view-client-asset.component.scss']
})
export class ViewClientAssetComponent implements OnInit {
  assetsToDisplay: any[] = [];

  constructor(private clientAsset: ClientAssetService) {
  }
  ngOnInit(): void {
    this.viewAssets();
    // console.log(this.assetsToDisplay);
  }



  viewAssets(){
    this.clientAsset.viewAllAsset().subscribe( data => {
      this.assetsToDisplay = data;
    });
  }

}
