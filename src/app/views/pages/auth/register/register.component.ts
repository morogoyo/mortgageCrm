import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../../../services/register/user.service";
import {FormBuilder} from "@angular/forms";
import {isEmpty} from "rxjs";
import * as events from "events";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userToSave: any;

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) { }



  ngOnInit(): void {
  }


  registerForm = this.fb.group({
    email: [''],
    password: [''],
    username: ['']

  });

  // onRegister(e: Event) {
  onRegister(e: events) {
    // e.preventDefault();
      this._registerNewAccount();
    if (this.registerForm.value != "") {
      localStorage.setItem('isLoggedin', 'true');
    }

    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']).then();
    }
  }

  _registerNewAccount() {

    this.userService.addUser(this.registerForm.value).subscribe(() => {

    });

  }
}
