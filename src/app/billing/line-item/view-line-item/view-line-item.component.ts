import { Component, OnInit } from '@angular/core';
import {LineItemService} from "../../../services/billing/line-item.service";

@Component({
  selector: 'app-view-line-item',
  templateUrl: './view-line-item.component.html',
  styleUrls: ['./view-line-item.component.scss']
})
export class ViewLineItemComponent implements OnInit {

  lineItemToDisplay: any;
  passedInClient: any;

  email="email1@example.com"

  test="test interpolation"


  constructor(private lineItemService: LineItemService ) {
  }
  ngOnInit(): void {
    // this.estimateDataService.estimate.subscribe(data => {
    //   this.passedInClient = data;
    // });
    this.viewLineItems();
    console.log(this.lineItemToDisplay);
  }

  estimateDataTransfer(client: any) {
    this.passedInClient = client;
    // this.estimateDataService.estimateInfo(this.passedInClient);
    console.log(client);
    console.log(this.passedInClient);
  }


  viewLineItems(){
    this.lineItemService.viewAllLineItemForEstimate().subscribe(data => {
      this.lineItemToDisplay = data;
    });
  }




}
