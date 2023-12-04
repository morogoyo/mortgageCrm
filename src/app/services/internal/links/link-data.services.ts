import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LinkDataServices {


  private linkToView = new BehaviorSubject<string>('');


  link = this.linkToView.asObservable();

  constructor() {
  }

  linkInfo(link: any) {
    this.linkToView.next(link);
  }

}
