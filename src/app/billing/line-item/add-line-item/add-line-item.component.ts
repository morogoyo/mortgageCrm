import { Component, OnInit } from '@angular/core';
import {EstimateService} from "../../../services/billing/estimate.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-line-item',
  templateUrl: './add-line-item.component.html',
  styleUrls: ['./add-line-item.component.scss']
})
export class AddLineItemComponent implements OnInit {

  constructor(private addEstimateService: EstimateService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // contactForm: FormGroup;
  addedEstimate: any;

  contactForm = this.fb.group({
    id: [''],
    email: [''],
    description: [''],
    unitPrice: [''],
    amount: [''],
    quantity: [''],
    total: [''],
    salesTax: [''],
    subTotal: [''],
    estimateNumber: [''],
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
