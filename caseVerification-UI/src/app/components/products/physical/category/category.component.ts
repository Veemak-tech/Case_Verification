import { Component, OnInit } from '@angular/core';
import { categoryDB } from '../../../../shared/tables/category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Comments } from '../../../../classes/comments';
import { FreeapiserviceService } from '../../../../services/freeapiservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {


  constructor(

    private _FreeapiserviceService: FreeapiserviceService
    )
    {

    }
    lstcomments:Comments[];


  ngOnInit() {
    this._FreeapiserviceService.getcomments().subscribe(
      data => {
        this.lstcomments = data;
      }
    );
  }

}
