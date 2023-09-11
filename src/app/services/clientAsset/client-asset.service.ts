import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TokenInterceptorService} from "../authorization/token-interceptor.service";
import {Observable} from "rxjs";
import {Asset} from "../../_shared/interfaces/asset";



@Injectable({
  providedIn: 'root'
})
export class ClientAssetService {


  API_URL = environment.REST_API_SERVER + '/assets';

  asset: any;




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


  viewAllAsset(): Observable<any>  {
    return this.http.get(this.API_URL+"/all");
  }

    viewAssetDetails(email: string): Observable<any>  {
    console.log("email string passed into viewAssetDetails {}",email);
        const url = this.API_URL+"/detail";
        let queryParams = new HttpParams();
        queryParams = queryParams.append("email",email);

        return this.http.get(url,{params:queryParams});
  }

  addAsset(asset: any){

    this.asset = {
      email: asset.email,
      adminURL: asset.adminurl,
      siteURL: asset.siteurl,
      services: asset.services

    }
    return this.http.post<Asset>(this.API_URL+"/add", this.asset);
  }


  updateAsset(asset: any){
    this.asset = {
      email: asset.email,
      adminURL: asset.adminURL,
      siteURL: asset.siteURL,
      services: asset.services

    }
    return this.http.put<Asset>(this.API_URL+"/update", this.asset);
  }

  deleteAsset(asset: any){
    return this.http.post(this.API_URL+"/multi_delete", this.asset);
  }

}
