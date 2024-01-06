import { Component, OnInit } from '@angular/core';
import {EstimateService} from "../../../services/billing/estimate.service";
import {ClientDataService} from "../../../services/internal/client/client-data.service";

@Component({
  selector: 'app-view-estimate',
  templateUrl: './view-estimate.component.html',
  styleUrls: ['./view-estimate.component.scss']
})
export class ViewEstimateComponent implements OnInit {
  private estimateToDisplay: any;

  constructor(private estimateService: EstimateService, private assetDataTransfer: ClientDataService) { }
  passedInClient: any;
  EstimatesToDisplay: any;

  ngOnInit(): void {
    this.assetDataTransfer.client.subscribe(data => {
      this.EstimatesToDisplay = data;
    })

    this.viewEstimate(this.passedInClient.email);
  }

  viewEstimate(email: any){
    this.estimateService.viewEstimateDetails(email).subscribe(data => {
      this.estimateToDisplay = data;
    })
  }

}
