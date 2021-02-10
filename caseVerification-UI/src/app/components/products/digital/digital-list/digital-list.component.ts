import { AuthService } from 'src/app/services/auth.service';
import { casedetails } from './../../../../models/casedetails';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
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
export class DigitalListComponent implements OnInit {
  public caseList: any;
  deleteID: string;
  CasedetailsService: any;
  Casedetails:casedetails;
  data: any;
  name: string;

  // Get data
  constructor(
    private user: CasedetailsService,
    private httpClient: HttpClient,
    private router: Router,
    private _route:ActivatedRoute,
    private userName: AuthService
  ) {
    this.user.getData().subscribe((data1) => {
      console.warn(data1);
      this.caseList = data1;
    });
    debugger;



    var name:string;
    this._route.queryParams.subscribe((params) => {

      name = params['name'];
    });

  }
  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const CaseID = +parameterMap.get('CaseID');
      this.getCasedetails(CaseID);
    });



      // this.userName.passname.subscribe((result) => {
      //   console.warn( result );
      //   this.data = result;

      // });

  }

  private getCasedetails(ID:number) {
    if(ID === 0) {
      this.Casedetails = {
        CaseID: null,
        Name: null,
        Description: null,
        InsurerVerificationNotes: null,
        T_VerificationNotes: null,
        ReferenceNumber:null,
        DueDate:null,
        CreatedBy: null,
        LastModifiedBy:null,
        insAddress:null,

        insDetails: null,

        tpartyDetails: null,
      };
    }
    else {
      this.Casedetails = this.CasedetailsService.getCasedetails(ID);
    }
  }

  // custom action
  public onCustomAction(event) {
    //debugger;
    switch (event.action){
      case 'viewrecord':
        this.viewRecord(event.data);
        break;
        case 'editrecord':
          this.editRecord(event.data);
    }
  }

  public editRecord(formData: any) {
    let rowdata = formData;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "ID": rowdata.ID,
      },
    };
 debugger;
    this.router.navigate(['/products/digital/case-edit'], navigationExtras);
    this.sendValues.emit(rowdata.ID);
  }


  public viewRecord(formData:any){

    let rowdata = formData;
  }


  @Output() sendValues = new EventEmitter<any>();

  handleRowSelect(event) {
    let rowdata = event.data;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "CaseID": rowdata.CaseID,
      },
    };
    //debugger;
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
        {
          name: 'editrecord',
          title:
            '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>&nbsp;&nbsp;',
        },
         // { name: 'viewrecord', title: '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>' }
      ],

      position: 'right',
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
      InsurerName: {
        title: 'InsurerName',
      },
      ID: {
        title: 'ID'
      }

      // InsurerVerificationNotes: {
      //   title: 'Insurer Verification Notes',
      // },
      // T_VerificationNotes: {
      //   title: 'Thirdparty Verification Notes',
      // },
      // CreatedBy: {
      //   title: 'Created By',
      // },
      // CreatedDate: {
      //   title: 'Created Date',
      // },
    },
  };
}



// settings: {
//   columns: {
//      age: {
//        title: 'Age',
//        editor: {
//          type: 'list',
//          config: {
//            selectText: 'Select',
//            list: [
//              {value: '1', title:'Option 1'},
//              {value: '2', title:'Option 2'},
//              {value: '3', title:'Option 3'},
//              {value: '4', title:'Option 4'},
//            ],
//          },
//        }
//        filter: {
//          type: 'list',
//          config: {
//            selectText: 'Select',
//            list: [
//              {value: '1', title:'Option 1'},
//              {value: '2', title:'Option 2'},
//              {value: '3', title:'Option 3'},
//              {value: '4', title:'Option 4'},
//            ],
//          },
//        },
//      },
//   }
// }
