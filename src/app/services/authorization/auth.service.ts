import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../_shared/interfaces/user";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(null!); // not sure why the not operator after the null

    this.user = this.userSubject.asObservable();
  }


  apiurl = environment.REST_API_SERVER + 'authenticate';

  private authCall: Observable<any>;
  private userCreds: User;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  ProceedLogin(data: any) {
    console.log(data);
    console.log(data.username);
    this.authCall = this.http.post<any>(environment.API_URL_AUTH,
      data
      )
      .pipe(map(data => {
        localStorage.setItem(environment.AUTHENTICATED_USER, `${data.username}`);
        localStorage.setItem(environment.TOKEN, `Bearer ${data.token}`);
        sessionStorage.setItem(environment.AUTHENTICATED_USER, `${data.username}`);
        sessionStorage.setItem(environment.TOKEN, `Bearer ${data.token}`);
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
    return localStorage.getItem(environment.TOKEN) || '';
  }

  getAuthenticatedUser(): string {
    return <string>localStorage.getItem(environment.AUTHENTICATED_USER);
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
