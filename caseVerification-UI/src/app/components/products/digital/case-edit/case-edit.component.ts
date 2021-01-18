import { CasedetailsService } from './../../../../services/casedetails.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  NgForm,
} from '@angular/forms';
import { casedetails } from './../../../../models/casedetails';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-case-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss'],
})
export class CaseEditComponent implements OnInit {
  private selectCaseID: number;
  @Input() Casedetails: casedetails;
  @Input() searchTerm: string;
  private _route: any;
  EditForm: FormGroup;
  case: casedetails;
  caseForm: NgForm;

  constructor(
    private httpClient: HttpClient,
    private _router: Router,
    private route: ActivatedRoute,
    private caseservice: CasedetailsService
  ) {
    var CaseID: number;
    debugger;
    this.route.queryParams.subscribe((params) => {
      CaseID = params['CaseID'];
    });

    this.caseservice.getByID(CaseID).subscribe((data: casedetails) => {
      console.log(data);
      this.case = data[0];
      this.EditForm = new FormGroup({
        CaseID: new FormControl(data[0]['CaseID']),
        Name: new FormControl(data[0]['Name']),
        Description: new FormControl(data[0]['Description']),
      });
    });
  }

  ngOnInit(): void {
    //this.selectCaseID = +this._route.snapshot.paramMap.get('CaseID');
  }

  // viewcasedetails() {
  //   this._router.navigate(['/casedetails', this.Casedetails.CaseID], {
  //     queryParams: { searchTerm: this.searchTerm },
  //   });
  // }

  // editcasedetails() {
  //   this._router.navigate(['/edit', this.Casedetails.CaseID]);
  // }
}
