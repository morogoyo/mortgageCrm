import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {Observable} from "rxjs";
import {Leads} from "../../_shared/interfaces/leads";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_URL = environment.REST_API_SERVER + '/client';

  clients: any;

  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': environment.CONTENT_TYPE,
      // 'Access-Control-Allow-Origin': environment.ACCESS_CONTROL_ALLOW_ORIGIN,
      'Origin': environment.ORIGIN,
      'Access-Control-Allow-Methods': environment.ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': environment.ACCESS_CONTROL_ALLOW_HEADERS,
    })
  };
  constructor( private http: HttpClient, private httpIntercept: TokenInterceptorService) { }


  viewAllClients(): Observable<any>  {
    return this.http.get(this.API_URL+"/all");
  }

  addClient(client: any){

    this.clients = {

      fname: client.fname,
      lname: client.lname,
      email: client.email,
      message: client.message,
      phoneNumber: client.phoneNumber,
      leadSource: client.leadSource


    }


    return this.http.post<Leads>(this.API_URL+"/add", this.clients);
  }

  deleteClient(client: any){
    return this.http.post(this.API_URL+"/multi_delete", client);
  }













}