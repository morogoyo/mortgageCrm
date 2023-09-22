import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../../services/client/client.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private clientService: ClientService, private fb: FormBuilder, private modalService: NgbModal, private router: Router) {

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
    this.clientService.addClient(this.contactForm.value).subscribe(clientToSave => {
        console.log(clientToSave);
        this.addedClient = clientToSave;

      }
    );

    this._redirectToClients();
  }

  _redirectToClients() {
    console.log("redirecting to /client")
    this.router.navigate(['/client']);
      location.reload();
  }

}


