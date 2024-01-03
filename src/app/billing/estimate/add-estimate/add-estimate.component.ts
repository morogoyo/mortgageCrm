import { Component, OnInit } from '@angular/core';
import {EstimateService} from "../../../services/billing/estimate.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-estimate',
  templateUrl: './add-estimate.component.html',
  styleUrls: ['./add-estimate.component.scss']
})
export class AddEstimateComponent implements OnInit {

  constructor(private addEstimateService: EstimateService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // contactForm: FormGroup;
  addedEstimate: any;

  contactForm = this.fb.group({
    id: [''],
    email: [''],
    description: [''],
    billingAddress: [''],
    projectAddress: [''],
    clientName: [''],
    category: [''],
    estimateNumber: [''],
    termsAndConditions: [''],
    lineItems: [],
  });


 // contactForm = this.fb.group({
 //   "id": "fe415f4f-36d6-40b7-9ac1-39f196d0afaf",
 //   "createdDate": "2023-08-31",
 //   "updateDate": "2023-11-16",
 //   "user": "morogoyo",
 //   "email": "email20@example.com",
 //   "description": "Project X",
 //   "billingAddress": "123 Main St",
 //   "projectAddress": "456 Oak Ave",
 //   "clientName": "ABC Corp",
 //   "date": "2023-09-19",
 //   "category": "Consulting",
 //   "estimateNumber": "EST-2023-11-16-JD",
 //   "termsAndConditions": "Terms 1",
 //   "lineItems": [ ]
 //  });

  preview: String

  onSubmit() {
    this.preview = JSON.stringify(this.contactForm.value);
    console.log(this.preview);
    this.addEstimateService.addEstimate(this.contactForm.value).subscribe((estimateToSave) => {
        console.log(estimateToSave);
        this.addedEstimate = estimateToSave;
      }
    );


  }


}
