import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssetDataService {

  constructor() { }



  private clientToView = new BehaviorSubject<string>('');



  client = this.clientToView.asObservable();


  clientInfo(client: any) {
    this.clientToView.next(client);
  }

}
