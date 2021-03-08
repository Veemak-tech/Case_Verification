import { AuthService } from 'src/app/services/auth.service';
import { casedetails } from './../../../../models/casedetails';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { digitalListDB } from 'src/app/shared/tables/digital-list';
import { HttpClient } from '@angular/common/http';
import { allIcons } from 'ngx-bootstrap-icons';
import { multicast } from 'rxjs/operators';



@Component({
  selector: 'app-digital-list',
  templateUrl: './digital-list.component.html',
  styleUrls: ['./digital-list.component.scss'],
})
export class DigitalListComponent implements OnInit {

  pagesize = [];
  pageno: any = {};

  public caseList: any;
  deleteID: string;
  CasedetailsService: any;
  Casedetails:casedetails;
  data: any;
  name: string;
  source: any;

  // Get data
  constructor(
    private user: CasedetailsService,
    private httpClient: HttpClient,
    private router: Router,
    private _route:ActivatedRoute,
    private userName: AuthService,

  ) {
    this.user.getData().subscribe((data1) => {
      debugger
      console.warn(data1);
      this.caseList = data1;
    });
   



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



    this._route.queryParams.subscribe(result => this.loadPage(result.page || 1));


  }


  private loadPage(page) {
    // debugger;
    // get page of items from api
    this.httpClient.get<any>(`http://localhost:3000/casedetails/${page}/${10}`).subscribe(result => {
        this.pageno = result.pager;
        this.pagesize = result.pageOfItems;
  // debugger;
        console.log(result.pagining)
    });
  }



  private getCasedetails(ID:number) {
    if(ID === 0) {
      this.Casedetails = {
        CaseID: null,
        name: null,
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
    debugger;
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
    selectMode: 'multi',

    actions: {

      columnTitle: 'Action',
      add: false,
      edit: false,
      delete: false,
      rowSelect: true,
      custom: [

        {
          name: 'editrecord',
          width: '5%',
          title:
            '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>&nbsp;&nbsp;',
        },
         // { name: 'viewrecord', title: '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>' }
      ],

      position: 'left',
    },
    columns: {
      CaseID: {
        title: 'Case ID',
        type: 'html',
        width: '8%'
      },
      InsurerName: {
        title: 'Insurer Name',
        //width: '18%'
      },
      Name: {
        title: 'Agent Name',
        width: '18%',
      },
      DueDate: {
        title: 'Due Date',
        width: '10%',
      },

      // username: {
      //   title: 'Status'
      // },

      username: {
        title: 'Status',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Aravinth',
            false: 'Not Assigned',
            resetText: 'clear',
          },
        },
        width: '15%'
      },
    },
    attr: {
        class: 'table table-bordered'
      }
  };
}
