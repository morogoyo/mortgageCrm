import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/authorization/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;

  // returnUrl: any ;
  returnUrl: any = '/auth';

  public formGroup: FormGroup;

  //form for component longin
  Login = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }



  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  username: any = this.Login.get('username')?.value

  onLoggedin(e: Event) {
    e.preventDefault();
    this.authService.ProceedLogin(this.Login.value).subscribe(result => {

      if (result != "") {
        console.log(this.Login.get('username')?.value);
        localStorage.setItem('isLoggedin', 'true');
        this.responsedata = result;
        localStorage.setItem('authenticatedUser', this.responsedata.username);
        this.router.navigate(['/leads'])
      } else {
        localStorage.setItem('isLoggedin', 'false');
        if (localStorage.getItem('isLoggedin')) {
          this.router.navigate([this.returnUrl]);
        }
      }
    });

  }
}
