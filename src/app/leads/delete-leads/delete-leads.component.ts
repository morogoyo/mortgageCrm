import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete-view',
  templateUrl: './delete-leads.component.html',
  styleUrls: ['./delete-leads.component.scss']
})
export class DeleteLeadsComponent implements OnInit {

  ngOnInit(): void {
  }

  basicModalCloseResult: string = '';
  constructor(private modalService: NgbModal) { }
  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }


}
