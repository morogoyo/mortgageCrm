import { Component, OnInit } from '@angular/core';
import {AdminAssetsService} from "../../../services/admin/admin-assets.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-link',
  templateUrl: './update-link.component.html',
  styleUrls: ['./update-link.component.scss']
})
export class UpdateLinkComponent implements OnInit {


  constructor(private assetLinkService: AdminAssetsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  linkData: any;
  linkToPassIn: any;
  addedLink: any;

  contactForm = this.fb.group({

    user: [''],
    email: [''],
    link: [''],
    url: [''],
    name: [''],
    category: [''],
    notes: [''],
    userName: [''],
    passwordLocation: [''],
  });

  preview: String

  onSubmit() {
    // this.preview = JSON.stringify(this.contactForm.value);
    this.assetLinkService.updateLinks(this.contactForm.value).subscribe((linkToSave) => {
        console.log(linkToSave);
        this.addedLink = linkToSave;
      }
    );
    this._redirectToLinks()
  }

  _redirectToLinks() {
    location.reload();
    this.router.navigate(['/admin']);
  }




}
