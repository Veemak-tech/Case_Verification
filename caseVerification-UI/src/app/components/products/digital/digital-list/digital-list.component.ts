import { CasedetailsService } from './../../../../services/casedetails.service';
import { Component, OnInit } from '@angular/core';
import { digitalListDB } from 'src/app/shared/tables/digital-list';
import { HttpClient } from '@angular/common/http'

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
    private httpClient: HttpClient
    ) {
    this.user.getData().subscribe((data1) => {
      console.warn(data1);
      this.caseList = data1;
    });
  }

  public caselistSettings = {
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: false,
      delete: true,
      position: 'right'
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
    }
  };

  // onDelete()
  // {
  //   const deleteURL = 'http://localhost:3000/casedetails/' + this.deleteID;
  //   // console.log(deleteURL);
  //   this.httpClient.delete(deleteURL).subscribe((results) => {
  //     this.CasedetailsService.dismissAll();
  //   });
  // }

}

