import { Component, EventEmitter, Input, OnInit, Output, ViewChild, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { casedetails } from './../../../../models/casedetails';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { assignments} from 'src/app/models/assignments'
import { digitalListDB } from 'src/app/shared/tables/digital-list';
import { HttpClient } from '@angular/common/http';
import { allIcons } from 'ngx-bootstrap-icons';
import { filter, multicast } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { selectRows } from '@swimlane/ngx-datatable';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { DOCUMENT } from '@angular/common';
import { questions } from 'src/app/models/questions';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule }   from '@angular/forms';




@Component({
  selector: 'app-case-assign',
  templateUrl: './case-assign.component.html',
  styleUrls: ['./case-assign.component.scss']
})
export class CaseAssignComponent implements OnInit {

  pagesize = [];
  pageno: any = {};

  public caseList: any;
  deleteID: string;
  CasedetailsService: any;
  Casedetails:casedetails;
  data: any;
  name: string;
  source: any;
  @Input() Agentname;
  selectedValue: any;
  mySelect: any;
  myselected: any;
  selectedRows:any
  selectedRowsAID:any
  @ViewChild("userPost") userassign: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Input() agents;
  multicaseid: any;
  caseidlist:any








  // Get data
  constructor(
    private user: CasedetailsService,
    private httpClient: HttpClient,
    private router: Router,
    private _route:ActivatedRoute,
    private userName: AuthService,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.user.getData().subscribe((data1) => {
      console.log(data1);
      this.caseList = data1;
    });


     // for get agent name
     this.userName.getName().subscribe((data) => {
      console.log(data);
      console.log('user is working');
      this.Agentname = data;
    });



    var name:string;
    this._route.queryParams.subscribe((params) => {

      name = params['name'];
    });

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  reloadComponent() {
    //this._document.defaultView.location.reload();

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
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
    this.httpClient.get<any>(`${environment.rooturl}${environment.apiUrlpostcase}/${page}/${10}`).subscribe(result => {
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
// Submit

 submit(formData) :void{

debugger;
this.user.caseassign(formData,this.caseidlist,this.selectedRowsAID,this.selectedRows).pipe(first()).subscribe(() => { this.create.emit(null); });
swal({
  icon: "success",
  title: "Submitted Successfully",
  buttons: [false],
  timer: 1500,
});



 }



  //select events
  public onUserRowSelect(event){
 debugger
      this.selectedRows = event.selected[0].CaseID;
      this.multicaseid = event.selected;
      this.selectedRowsAID = event.selected[0].AssignmentID;

      let bigCities = [];
       this.caseidlist = bigCities;
for (let i = 0; i < this.multicaseid.length; i++) {
    if (this.multicaseid[i].CaseID > 0) {
        bigCities.push(this.multicaseid[i].CaseID);
    }
}
console.log(bigCities);

 }

  selectChange() {
    debugger
    this.selectedValue = this.user.getDropDownText(this.mySelect, this.Agentname)[0].id;


    //console.log(myselected + "name")
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
        "AssignmentID": rowdata.AssignmentID
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
      // custom: [

      //   {
      //     name: 'editrecord',
      //     width: '5%',
      //     title:
      //       '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>&nbsp;&nbsp;',
      //   },
      //    // { name: 'viewrecord', title: '<i class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"></i>' }
      // ],

      position: 'left',
    },
    columns: {
      CaseID: {
        title: 'Case ID',
        type: 'html',
        width: '10%'
      },
      InsurerName: {
        title: 'Insurer Name',
        width: '20%'
      },

      CreatedDate: {
        title: 'Creation Date',
        width: '11%'
      },
      DueDate: {
        title: 'Due Date',
        width: '10%',
      },
      Name: {
        title: 'Agent Name',
        width: '15%',
      },

      AssignmentID:{
        title: 'Assignment ID',
        hide: true
      },

      username: {
        title: 'Assign to',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Not Assigned',
            false: '',
            resetText: 'clear',
          },
        },
        width: '15%'
      },

      // StatusName:{
      //   title: "Status"
      // },
      StatusName: {
        title: 'Current Status',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Assigned', title:'Assigned' },
              { value: 'In Progress', title:'In Progress'},
              { value:'Pending', title:'Pending'},
              { value:'Not Assigned', title:'Not Assigned'}
            ],
          },
        },
      },

      // movie: {
      //   title: 'Movie',
      //   type: 'list',
      //   config: {
      //     list: [{title: 'Lion King', value: '1'}, {title: 'The Matrix', value: '2'}]
      //   }
      // }


    },
    attr: {
        class: 'table table-bordered'
    }
  };
}
