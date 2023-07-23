import {Component, OnInit} from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrls: ['./add-leads.component.scss']
})
export class AddLeadsComponent implements OnInit {


  constructor(private leadService: CrudService, private fb: FormBuilder) {

  }

  ngOnInit() {

  }

  // contactForm: FormGroup;
  addedLead: any;

  contactForm = this.fb.group({
    fname: [''],
    lname: [''],
    email: [''],
    leadSource: [''],
    phoneNumber: [''],
  });

  preview: String

  onSubmit() {
    // this.preview = JSON.stringify(this.contactForm.value);
    this.leadService.addLead(this.contactForm.value).subscribe((leadToSave) => {
      console.log(leadToSave);
        this.addedLead = leadToSave;
      }
    );


  }


}
