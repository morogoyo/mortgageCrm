import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Leads} from "../../_shared/interfaces/leads";

@Injectable({
  providedIn: 'root'
})

export class LeadDataService {
  private leadtoView = new BehaviorSubject<string>('');
  lead = this.leadtoView.asObservable()

  constructor() {
  }

  leadInfo(lead: any) {
    this.leadtoView.next(lead);
  }

}
