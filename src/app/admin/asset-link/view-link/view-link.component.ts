import { Component, OnInit } from '@angular/core';
import {AdminAssetsService} from "../../../services/admin/admin-assets.service";
import {Subscription} from "rxjs";
import {LinkDataService} from "../../../services/internal/link-data.service";


@Component({
  selector: 'app-view-link',
  templateUrl: './view-link.component.html',
  styleUrls: ['./view-link.component.scss']
})

export class ViewLinkComponent implements OnInit {
  assets: any;

  constructor(private assetService: AdminAssetsService, private linkData: LinkDataService) { }

  ngOnInit(): void {
   this.getAllLinks();
  }

  linkToPassIn: any;


  getAllLinks() {
    this.assetService.viewAllLinks().subscribe((data) => {
      console.log(data);
      this.assets = data;
    });
  }

  linksDataTransfer(link: any) {
    this.linkToPassIn = link;
    this.linkData.linkInfo(this.linkToPassIn);
    console.log(link);
    console.log(this.linkToPassIn);
  }



}
