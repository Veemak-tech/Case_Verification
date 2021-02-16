import { ActivatedRoute } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AuthService } from 'src/app/services/auth.service';
import { casedetails } from './../../../../models/casedetails';
import { HttpClient } from '@angular/common/http';
import { CasedetailsService } from './../../../../services/casedetails.service';
import {JwPaginationModule} from 'jw-angular-pagination'



@Component({
  selector: 'app-digital-add',
  templateUrl: './digital-add.component.html',
  styleUrls: ['./digital-add.component.scss']
})
export class DigitalAddComponent implements OnInit {

  @Output() setGrid: EventEmitter<any> = new EventEmitter<any>();
  @Output() setLayout: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortedBy: EventEmitter<any> = new EventEmitter<any>();

  @Input() layoutView: string = 'grid-view';
  @Input() sortBy: string;
  @Input() products: casedetails[] = [];

  pagesize = [];
  pageno: any = {};

  public caseList: any;
  public paginate : any;


  constructor(
    private user: CasedetailsService,
    private httpClient: HttpClient,
    private userName: AuthService,
    private route: ActivatedRoute,

  ) {

   }

   ngOnInit() {
    this.route.queryParams.subscribe(result => this.loadPage(result.page || 1));

}

private loadPage(page) {
  debugger;
  // get page of items from api
  this.httpClient.get<any>(`http://localhost:3000/casedetails/${page}/${10}`).subscribe(result => {
      this.pageno = result.pager;
      this.pagesize = result.pageOfItems;
debugger;
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
