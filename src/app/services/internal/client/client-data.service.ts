import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor() { }



  private clientToView = new BehaviorSubject<string>('');



  client = this.clientToView.asObservable();


  clientInfo(client: any) {
    console.log("Client data from asset data", client)
    this.clientToView.next(client);
  }

}
