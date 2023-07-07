import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  API_URL_AUTH,
  ApplicationConfiguration,
  AUTHENTICATED_USER,
  TOKEN
} from "../../_helpers/applicationConfiguration";

import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../_shared/interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(null!); // not sure why the not operator after the null

    this.user = this.userSubject.asObservable();
  }


  apiurl = ApplicationConfiguration.API_ENDPOINT + 'authenticate';

  private authCall: Observable<any>;
  private userCreds: User;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;



  ProceedLogin(data: any) {
    console.log(data);
    console.log(data.username);
    console.log(data.userName);
    this.authCall = this.http.post<any>(`${API_URL_AUTH}`,
      data
      , ApplicationConfiguration.HTTPOPTIONS)
      .pipe(map(data => {
        localStorage.setItem(AUTHENTICATED_USER, `${data.username}`);
        localStorage.setItem(TOKEN, `Bearer ${data.token}`);
        sessionStorage.setItem(AUTHENTICATED_USER, `${data.username}`);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        this.userSubject.next(data);
        // this.startRefreshTokenTimer();  Need to fix the refresh token method
        return data;
      }));

    return this.authCall;


  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    // if (this.getAuthenticatedUser()) {
    //   return localStorage.getItem(TOKEN)|| '';
    // }
    return localStorage.getItem(TOKEN) || '';
  }

  getAuthenticatedUser(): string  {
    return <string>localStorage.getItem(AUTHENTICATED_USER);
  }


  HaveAccess() {
    var loggintoken = localStorage.getItem('token') || '';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    if (_finaldata.role == 'admin') {
      return true
    } else {
      alert('your not having access');
      return false
    }
  }
}
