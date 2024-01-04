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
