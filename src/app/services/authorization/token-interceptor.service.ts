import {Injectable, Injector} from '@angular/core';
import {AuthService} from "./auth.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(private inject:Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice=this.inject.get(AuthService);
    let jwtToken = req.clone({
      setHeaders: {
        "Authorization": authservice.GetToken(),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
       "Access-Control-Allow-Headers": "Content-Type"

      }
    });
    return next.handle(jwtToken);
  }
}
