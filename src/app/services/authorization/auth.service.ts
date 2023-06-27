import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApplicationConfiguration} from "../../_helpers/applicationConfiguration";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = ApplicationConfiguration.API_ENDPOINT + 'authenticate';


  constructor(private http: HttpClient) {

  }

  ProceedLogin(UserCred: any) {
    console.log(UserCred)
    return this.http.post(this.apiurl, UserCred);
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') || '';
  }

  HaveAccess() {
    var loggintoken = localStorage.getItem('token') || '';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    if (_finaldata.role == 'admin') {
      return true
    } else {
      alert('you not having access');
      return false
    }
  }
}
