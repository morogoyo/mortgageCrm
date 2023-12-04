import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LinkDataServices123123123 {


  private linkToView = new BehaviorSubject<string>('');


  link = this.linkToView.asObservable();

  constructor() {
  }

  linkInfo(link: any) {
    this.linkToView.next(link);
  }

}
