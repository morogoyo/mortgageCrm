import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {Observable} from "rxjs";
import {LineItem} from "../../_shared/interfaces/line-item";

@Injectable({
  providedIn: 'root'
})
export class LineItemService {
  constructor( private http: HttpClient, private httpIntercept: TokenInterceptorService) { }

  API_URL = environment.REST_API_SERVER + '/estimate';

  lineItem: any;

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



  viewAllLineItem(): Observable<any>  {
    return this.http.get(this.API_URL+"/all");
  }

  viewLineItemDetails(email: string): Observable<any>  {
    console.log("email string passed into viewLineItemDetails {}",email);
    const url = this.API_URL+"/detail";
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);

    return this.http.get(url,{params:queryParams});
  }

  addLineItem(item: any){

    this.lineItem = {
      email: item.email,
      adminURL: item.adminurl,
      siteURL: item.siteurl,
      services: item.services

    }
    return this.http.post<LineItem>(this.API_URL+"/add", this.lineItem);
  }


  updateLineItem(item: any){
    this.lineItem = {
      email: item.email,
      adminURL: item.adminURL,
      siteURL: item.siteURL,
      services: item.services

    }
    return this.http.put<LineItem>(this.API_URL+"/update", this.lineItem);
  }

  deleteLineItem(todelete: any){
    return this.http.post(this.API_URL+"/multi_delete", this.lineItem);
  }
}
