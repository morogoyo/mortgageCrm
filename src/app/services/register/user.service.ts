import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {Observable} from "rxjs";
import {User} from "../../_shared/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  API_URL = environment.REST_API_SERVER + '/client';

  user: any;


  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': environment.CONTENT_TYPE,
      'Access-Control-Allow-Origin': environment.ACCESS_CONTROL_ALLOW_ORIGIN,
      'Origin': environment.ORIGIN,
      'Access-Control-Allow-Methods': environment.ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': environment.ACCESS_CONTROL_ALLOW_HEADERS,
    })
  };


  constructor(private http: HttpClient, private httpIntercept: TokenInterceptorService) {
  }


  viewAllUsers(): Observable<any> {
    return this.http.get(this.API_URL + "/all");
  }

  addUser(user: any) {

    this.user = {
      email: user.email,
      userName: user.username,
      password: user.password,
      role: 2
    }
    return this.http.post<User>(this.API_URL + "/add", this.user);
  }

  deleteUser(user: any) {
    return this.http.post(this.API_URL + "/multi_delete", user);
  }

}



