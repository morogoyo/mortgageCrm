import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/leads/crud.service";

@Component({
  selector: 'app-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrls: ['./add-leads.component.scss']
})
export class AddLeadsComponent implements OnInit {

  constructor(private leadService: CrudService) { }

  ngOnInit(): void {
  }


}
