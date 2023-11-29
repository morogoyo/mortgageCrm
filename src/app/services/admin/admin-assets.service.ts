import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {Observable} from "rxjs";
import {Links} from "../../_shared/interfaces/Links";




@Injectable({
  providedIn: 'root'
})
export class AdminAssetsService {

  API_URL = environment.REST_API_SERVER + '/asset-links';

  assetLink: any;




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
  constructor( private http: HttpClient, private httpIntercept: TokenInterceptorService) { }


  viewAllLinks(): Observable<any>  {
    return this.http.get(this.API_URL+"/get");
  }

  addLinks(link: any)
  {
    this.assetLink = {
      user: link.user,
      name: link.name,
      email: link.email,
      link: link.link,
      url: link.url,
      notes: link.notes,
      userName: link.userName,
      passwordLocation: link.passwordLocation,

    }


    return this.http.post<Links>(this.API_URL+"/add", this.assetLink);
  }


  updateLinks(link: any){

    this.assetLink = {
      fname: link.fname,
      lname: link.lname,
      email: link.email,
      message: link.message,
      phoneNumber: link.phoneNumber,
      leadSource: link.leadSource,
      client: link.client
    }
    return this.http.put<Links>(this.API_URL+"/update", this.assetLink);
  }

  deleteLead(linkId: any){
    return this.http.delete(this.API_URL + "/" + linkId);
  }



}
