import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstimateDataService {


  private estimateToView = new BehaviorSubject<string>('');


  estimate = this.estimateToView.asObservable();

  constructor() {
  }

  estimateInfo(link: any) {
    this.estimateToView.next(link);
  }
}
