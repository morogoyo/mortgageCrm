import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private leadService: CrudService, private fb: FormBuilder) {

  }

  ngOnInit() {

  }

  // contactForm: FormGroup;
  addedClient: any;

  contactForm = this.fb.group({

    id: [''],
    email: [''],
    fname: [''],
    lname: [''],
    address: [''],
    zip: [''],
    city: [''],
    state: [''],
    phoneNumber: [''],
    birthDay: [''],
    jobTitle: [''],
    demographicInfo: [''],
    companyName: [''],

    maritalStatus: [''],
    numberOfChildren: [''],
    createdDate: [''],
    updateDate: ['']
  });

  preview: String

  onSubmit() {
    // this.preview = JSON.stringify(this.contactForm.value);
    this.leadService.addLead(this.contactForm.value).subscribe((clientToSave) => {
        console.log(clientToSave);
        this.addedClient = clientToSave;
      }
    );


  }


}


