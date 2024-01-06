import { Component, OnInit } from '@angular/core';
import {EstimateService} from "../../../services/billing/estimate.service";
import {EstimateDataService} from "../../../services/internal/estimate/estimate-data.service";

@Component({
  selector: 'app-view-estimate',
  templateUrl: './view-estimate-list.component.html',
  styleUrls: ['./view-estimate-list.component.scss']
})
export class ViewEstimateListComponent implements OnInit {

  estimateToDisplay: any;
  passedInClient: any;

  test="test interpolation"


  //TODO NEED ESTIMATE DATA SERVICES TO PASS AROUND THE EMAIL ADDRESS OF THE CLIENT GETTING THE ESTIMATE
  constructor(private estimateService: EstimateService, private estimateDataService: EstimateDataService ) {
  }
  ngOnInit(): void {
    this.estimateDataService.estimate.subscribe(data => {
      this.passedInClient = data;
    });
    this.viewEstimate();
    // console.log(this.assetsToDisplay);
  }

  estimateDataTransfer(client: any) {
    this.passedInClient = client;
    this.estimateDataService.estimateInfo(this.passedInClient);
    console.log(client);
    console.log(this.passedInClient);
  }

  viewEstimate(){
    this.estimateService.viewAllEstimate().subscribe( data => {
      this.estimateToDisplay = data;
    });
  }



}
