import { Component, OnInit } from '@angular/core';
import {AdminAssetsService} from "../../../services/admin/admin-assets.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-view-link',
  templateUrl: './view-link.component.html',
  styleUrls: ['./view-link.component.scss']
})

export class ViewLinkComponent implements OnInit {
  assets: any;

  constructor(private assetService: AdminAssetsService ) { }

  ngOnInit(): void {
   this.getAllLinks();
  }

  getAllLinks() {
    this.assetService.viewAllLinks().subscribe((data) => {
      console.log(data);
      this.assets = data;
    });
  }

}
