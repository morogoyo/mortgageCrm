import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Leads} from "../../_shared/interfaces/leads";
import {Clients} from "../../_shared/interfaces/clients";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API_URL = environment.REST_API_SERVER + '/lead';

  lead: any;




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


  viewAllLeads(): Observable<any>  {
    return this.http.get(this.API_URL+"/view");
  }

  addLead(leads: any){

    this.lead = {
      fname: leads.fname,
      lname: leads.lname,
      email: leads.email,
      message: leads.message,
      phoneNumber: leads.phoneNumber,
      leadSource: leads.leadSource,
      client: leads.client
    }
    return this.http.post<Leads>(this.API_URL+"/add", this.lead);
  }


  updateLead(leads: any){

    this.lead = {
      fname: leads.fname,
      lname: leads.lname,
      email: leads.email,
      message: leads.message,
      phoneNumber: leads.phoneNumber,
      leadSource: leads.leadSource,
      client: leads.client
    }
    return this.http.put<Leads>(this.API_URL+"/update", this.lead);
  }

 deleteLead(leads: any){
    return this.http.post(this.API_URL+"/multi_delete", leads);
  }





}
