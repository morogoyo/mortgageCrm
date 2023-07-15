import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  ACCESS_CONTROL_ALLOW_HEADERS,
  ACCESS_CONTROL_ALLOW_METHODS,
  ACCESS_CONTROL_ALLOW_ORIGIN,
  ApplicationConfiguration,
  CONTENT_TYPE, ORIGIN
} from "../../_helpers/applicationConfiguration";
import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiurl = ApplicationConfiguration.API_ENDPOINT + 'lead';



  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      Origin: ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS })
  };
  constructor( private http: HttpClient, private httpIntercept: TokenInterceptorService) { }


  viewAllLeads(): Observable<any>  {
    return this.http.get(this.apiurl+"/view");
  }

  addLead(leads: any){
    return this.http.post(this.apiurl+"/add", leads);
  }



}
