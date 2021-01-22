import { insurerDetails } from './../../../../models/insurerDetails';
import { address } from './../../../../models/address';
import { CasedetailsService } from './../../../../services/casedetails.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  NgForm,
  FormBuilder
} from '@angular/forms';
import { casedetails } from './../../../../models/casedetails';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { id } from '@swimlane/ngx-charts';
import { tap } from 'rxjs/operators';
import { thirdpartyDetails } from 'src/app/models/thirdpartydetails';

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
  CasedetailsService: any;
  fetchAll: any;

  constructor(
    private httpClient: HttpClient,
    private _router: Router,
    private route: ActivatedRoute,
    private caseservice: CasedetailsService,
    private fb:FormBuilder
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
        CaseID: new FormControl(this.case['CaseID']),
        Name: new FormControl(this.case['Name']),
        Description: new FormControl(this.case['Description']),
        ReferenceNumber: new FormControl(this.case['ReferenceNumber']),
        InsurerVerificationNotes: new FormControl(this.case['InsurerVerificationNotes']),
        T_VerificationNotes: new FormControl(this.case['T_VerificationNotes']),
        DueDate: new FormControl(this.case['DueDate']),
        CreatedBy: new FormControl(this.case['CreatedBy']),
        LastModifiedBy: new FormControl(this.case['LastModifiedBy']),
        insAddress: new FormControl(this.case['insAddress']),
        insDetails: new FormControl(this.case['insDetails']),
        tpartyDetails: new FormControl(this.case['tpartyDetails']),

      });
    });

   }

// update

  ngOnInit(): void {

  }
  casedetailsupdate({ value, valid }):void {

    const CaseID = <string>this.EditForm.get('CaseID').value;
    const Name = <string>this.EditForm.get('Name').value;
    const ReferenceNumber = <string>this.EditForm.get('ReferenceNumber').value;
    const Description = <string>this.EditForm.get('Description').value;
    const InsurerVerificationNotes = <string>this.EditForm.get('InsurerVerificationNotes').value;
    const T_VerificationNotes = <string>this.EditForm.get('T_VerificationNotes').value;
    const DueDate = <string>this.EditForm.get('DueDate').value;
    const CreatedBy = <string>this.EditForm.get('CreatedBy').value;
    const LastModifiedBy = <string>this.EditForm.get('LastModifiedBy').value;
    const insAddress = null;
    const insDetails = null;
    const tpartyDetails = null;


    if (!CaseID) return;

    const caseupdate: casedetails = {
      CaseID,
      Name,
      ReferenceNumber,
      Description,
      InsurerVerificationNotes,
      T_VerificationNotes,
      DueDate,
      CreatedBy,
      LastModifiedBy,
      insAddress,
      insDetails,
      tpartyDetails

    };

    this.Casedetails = this.CasedetailsService.update(caseupdate);
    // .pipe(tap(() => (this.Casedetails = this.fetchAll())));
  }

}



  //   this.caseservice.updateCase(CaseID,data) {
  //     this.EditForm = this.fb.group({
  //       CaseID:['',[Validators.required]],
  //       Name: ['', [Validators.required]],
  //       ReferenceNumber:['',[Validators.required]],
  //       Description:['',[Validators.required]]
  //     })
  //   }

  //   onSubmit() {
  //     this.submit = true;
  //     if (!this.editForm.valid) {
  //       return false;
  //     } else {
  //       if (window.confirm('Are you sure?')) {
  //         let CaseID = this.route.snapshot.paramMap.get('CaseID');
  //         this.caseservice.update(CaseID,data).subscribe((result) => {
  //              console.log(result, 'data updated succesfully');
  //              });
  //       }
  //     }
  //   }

  //   this.caseservice.update(CaseID,Name,Description,ReferenceNumber).subscribe((result) => {
  //       console.log(result, 'data updated succesfully');
  //     });


