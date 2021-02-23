import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute, NavigationExtras } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AuthService } from 'src/app/services/auth.service';
import { casedetails } from './../../../../models/casedetails';
import { HttpClient } from '@angular/common/http';
import { CasedetailsService } from './../../../../services/casedetails.service';
import {JwPaginationModule} from 'jw-angular-pagination'
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Data } from '@angular/router';



@Component({
  selector: 'app-digital-add',
  templateUrl: './digital-add.component.html',
  styleUrls: ['./digital-add.component.scss']
})
export class DigitalAddComponent implements OnInit {

  editProfileForm: FormGroup;

  @Output() setGrid: EventEmitter<any> = new EventEmitter<any>();
  @Output() setLayout: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortedBy: EventEmitter<any> = new EventEmitter<any>();
  @Input() name;
  // @Input() public pagesize = [];

  @Input() layoutView: string = 'grid-view';
  @Input() sortBy: string;
  @Input() products: casedetails[] = [];

  pagesize = [];
  pageno: any = {};
  data :[];
  public caseList: any;
selecteditems:string[];
selecteditems2:string[];

  public paginate : any;
  viewRecord: any;
  editRecord: any;

  closeResult = '';
  editForm: FormGroup;


  constructor(
    private user: CasedetailsService,
    private httpClient: HttpClient,
    private userName: AuthService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public  activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private router: Router,

  ) {
    debugger
    this.userName.getName().subscribe((data) => {
      console.warn(data);
      console.log("user is working")
      this.name = data;
    });

   }

   ngOnInit() {
    this.route.queryParams.subscribe(result => this.loadPage(result.page || 1));


    this.editProfileForm = this.fb.group({
      CaseID: [''],
      ID: [''],
      Name: [''],
      Description:[''],
      ReferenceNumber:[''],
      DueDate:['']
     });

     this.selecteditems = new Array<string>();
     this.selecteditems2 = new Array<string>();
}
selectID(e:any){
  console.log(e[e.selectedIndex].id);
}


  CheckID(e:any,id:string){

  if(e.target.checked)
  {
    console.log(id+'checked');
    this.selecteditems.push(id);
  }
  else
  {
     console.log(id+'unchecked');
this.selecteditems =this.selecteditems.filter(m=>m!=id);
  }
  console.log(this.selecteditems)
}

submit()
{
  
}

////

openModal(targetModal, item) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });

  this.editProfileForm.patchValue({
   CaseID: item.CaseID,
   ID: item.ID,
   Name: item.Name,
   Description:item.Description,
   ReferenceNumber:item.ReferenceNumber,
   DueDate:item.DueDate
  });
 }

 
 

public onCustomAction(event,item,action) {
  debugger;
  switch (action){
    case 'viewrecord':
      this.viewRecord(event.data);
      break;
    case 'edit':

      let rowdata = item;
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "ID": rowdata.ID,
        },
      };
      debugger;
      this.router.navigate(['/products/digital/case-edit'], navigationExtras);
      this.sendValues.emit(rowdata.ID);
      break;
    default:
      break;

  }
}
@Output() sendValues = new EventEmitter<any>();


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

setGridLayout(value: string) {
  this.setGrid.emit(value);  // Set Grid Size
}

setLayoutView(value: string) {
  this.layoutView = value
  this.setLayout.emit(value); // Set layout view
}

sorting(event) {
  this.sortedBy.emit(event.target.value)
}


  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public onUploadInit(args: any): void { }

  public onUploadError(args: any): void { }

  public onUploadSuccess(args: any): void { }





}
