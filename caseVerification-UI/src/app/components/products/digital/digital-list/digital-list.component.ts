import { CasedetailsService } from './../../../../services/casedetails.service';
import { Component, OnInit } from '@angular/core';
import { digitalListDB } from 'src/app/shared/tables/digital-list';

@Component({
  selector: 'app-digital-list',
  templateUrl: './digital-list.component.html',
  styleUrls: ['./digital-list.component.scss']
})
export class DigitalListComponent {

  data : any;


  constructor(
    private user:CasedetailsService
  ){
    this.user.getData().subscribe(data=>{
      console.warn(data);
      this.data=data;
    })
  }

}
