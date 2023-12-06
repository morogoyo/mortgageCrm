import {Component, OnInit, TemplateRef} from '@angular/core';
import {AdminAssetsService} from "../../../services/admin/admin-assets.service";
import {Subscription} from "rxjs";
import {LinkDataService} from "../../../services/internal/link-data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";


@Component({
  selector: 'app-view-link',
  templateUrl: './view-link.component.html',
  styleUrls: ['./view-link.component.scss']
})

export class ViewLinkComponent implements OnInit {
  assets: any;

  count: any;

  constructor(private assetService: AdminAssetsService, private linkData: LinkDataService, private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
   this.getAllLinks();
  }

  linkToPassIn: any;
  linkToDelete: any;


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

  selectLink(asset: any, i: number) {
    this.linkToDelete = asset.target.getAttribute("id")
    console.log(this.linkToDelete);
  }

  deleteLink(){
   this.assetService.deleteLink(this.linkToDelete).subscribe(
    (data) => {
      console.log(data)
    })
    location.reload();
  }


  addLink() {
    this.router.navigate(['/admin/add']);
    location.reload();
  }
}
