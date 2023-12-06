import {Component, OnInit} from '@angular/core';
import {AdminAssetsService} from "../../../services/admin/admin-assets.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LinkDataService} from "../../../services/internal/link-data.service";
import {Links} from "../../../_shared/interfaces/Links";

@Component({
  selector: 'app-update-link',
  templateUrl: './update-link.component.html',
  styleUrls: ['./update-link.component.scss']
})
export class UpdateLinkComponent implements OnInit {

  passedInLink: any;

  constructor(private assetLinkService: AdminAssetsService, private fb: FormBuilder, private router: Router, private linkData: LinkDataService) {
  }

  ngOnInit(): void {
    this.linkData.link.subscribe(data => {
      console.log(data);
      this.passedInLink = data;
    });

  }


  linkToPassIn: Links;
  addedLink: Links;
  linkToUpdate: Links;

  contactForm = this.fb.group({
    id: [''],
    user: [''],
    email: [''],
    link: [''],
    url: [''],
    name: [''],
    category: [''],
    notes: [''],
    userName: [''],
    passwordLocation: [''],
    type: ['']
  });

  preview: String

  onSubmit() {
    //todo method to update the object from the form

    // this.preview = JSON.stringify(this.contactForm.value);
    this.assetLinkService.updateLinks(this.contactForm.value,this.passedInLink).subscribe((linkToSave) => {
        console.log(linkToSave);
        this.addedLink = linkToSave;
      }
    );
    this._redirectToLinks()
  }

  _redirectToLinks() {

    this.router.navigate(['/admin']);
    // location.reload();
  }





}
