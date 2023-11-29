import { Component, OnInit } from '@angular/core';
import {AdminAssetsService} from "../../../services/admin/admin-assets.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  constructor(private assetLinkService: AdminAssetsService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

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
    this.assetLinkService.addLinks(this.contactForm.value).subscribe((linkToSave) => {
        console.log(linkToSave);
        this.addedLink = linkToSave;
      }
    );
  }

}
