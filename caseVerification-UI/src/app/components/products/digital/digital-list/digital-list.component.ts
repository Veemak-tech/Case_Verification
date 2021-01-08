import { Router, NavigationExtras } from '@angular/router';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { digitalListDB } from 'src/app/shared/tables/digital-list';
import { HttpClient } from '@angular/common/http';
import { allIcons } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-digital-list',
  templateUrl: './digital-list.component.html',
  styleUrls: ['./digital-list.component.scss'],
})
export class DigitalListComponent {
  public caseList: any;
  deleteID: string;
  CasedetailsService: any;

  // Get data
  constructor(
    private user: CasedetailsService,
    private httpClient: HttpClient,
    private router: Router,

  ) {
    this.user.getData().subscribe((data1) => {
      console.warn(data1);
      this.caseList = data1;
    });
  }

  public onCustomAction(event) {

    this.editRecord(event.data);
  }
  public editRecord(formData: any) {
    let rowdata = formData;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        CaseID: rowdata.CaseID,
      },
    };

    this.router.navigate(['/products/digital/case-edit'], navigationExtras);
    this.sendValues.emit(rowdata.CaseID);
  }
  @Output() sendValues = new EventEmitter<any>();

  handleRowSelect(event) {
    let rowdata = event.data;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: rowdata.id,
      },
    };
    this.router.navigate(['/products/digital/case-edit'], navigationExtras);
    this.sendValues.emit(rowdata.CaseID);
  }

  public caselistSettings = {
    actions: {
      columnTitle: 'Action',
      add: false,
      edit: false,
      delete: false,
      custom: [
        { name: 'editrecord', title: '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>&nbsp;&nbsp;'}
       // { name: 'editrecord', title: '<i class="nb-plus"></i>' }
      ],
      position: 'left',
    },

    columns: {
      CaseID: {
        title: 'Case ID',
        type: 'html',
      },
      Name: {
        title: 'Name',
      },
      Description: {
        title: 'Description',
      },
      InsurerVerificationNotes: {
        title: 'Insurer Verification Notes',
      },
      T_VerificationNotes: {
        title: 'Thirdparty Verification Notes',
      },
      CreatedBy: {
        title: 'Created By',
      },
      CreatedDate: {
        title: 'Created Date',
      },
    },
  };
}
