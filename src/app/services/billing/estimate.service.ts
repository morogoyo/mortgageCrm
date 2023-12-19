import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Estimate} from "../../_shared/interfaces/estimate";

@Injectable({
  providedIn: 'root'
})
export class EstimateService {
    constructor( private http: HttpClient, private httpIntercept: TokenInterceptorService) { }

  API_URL = environment.REST_API_SERVER + '/estimate';

  estimate: any;

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



  viewAllEstimate(): Observable<any>  {
    return this.http.get(this.API_URL+"/get");
  }

  viewEstimateDetails(email: string): Observable<any>  {
    console.log("email string passed into viewEstimateDetails {}",email);
    const url = this.API_URL+"/detail";
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);

    return this.http.get(url,{params:queryParams});
  }

  addEstimate(data: any){

    this.estimate = {
      email: data.email,
      adminURL: data.adminurl,
      siteURL: data.siteurl,
      services: data.services

    }
    return this.http.post<Estimate>(this.API_URL+"/add", this.estimate);
  }


  updateEstimate(data: any){
    this.estimate = {
      email: data.email,
      adminURL: data.adminURL,
      siteURL: data.siteURL,
      services: data.services

    }
    return this.http.put<Estimate>(this.API_URL+"/update", this.estimate);
  }

  deleteEstimate(todelete: any){
    return this.http.post(this.API_URL+"/multi_delete", this.estimate);
  }
}
