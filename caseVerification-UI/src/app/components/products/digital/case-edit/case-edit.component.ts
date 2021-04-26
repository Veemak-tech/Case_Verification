import { insurerDetails } from './../../../../models/insurerDetails';
import { address } from './../../../../models/address';
import { CasedetailsService } from './../../../../services/casedetails.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  NgForm,
  FormBuilder,
} from '@angular/forms';
import { casedetails } from './../../../../models/casedetails';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { id } from '@swimlane/ngx-charts';
import { tap } from 'rxjs/operators';
import { thirdpartyDetails } from 'src/app/models/thirdpartydetails';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import swal from 'sweetalert';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-case-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss'],
})
// @Injectable({
//   providedIn: 'root'
// })
export class CaseEditComponent implements OnInit {
  private selectCaseID: number;
  @Input() Casedetails: casedetails;
  @Input() searchTerm: string;
  private _route: any;
  EditForm: FormGroup;
  form: FormGroup;
  case: casedetails;
  caseForm: NgForm;
  // CasedetailsService: any;
  fetchAll: any;
  casedet$: any;
  submitted = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private caseservice: CasedetailsService,
    private formbuilder: FormBuilder,
    private toastrService: ToastrService

  ) {
    var ID: number;

    this.route.queryParams.subscribe((params) => {
      debugger;
      ID = params['ID'];
    });

    this.caseservice.getByID(ID).subscribe((data: casedetails) => {
      console.log(data);
      this.case = data[0];
      debugger;
      this.EditForm = new FormGroup({
        ID:new FormControl(this.case['ID']),
        CaseID: new FormControl(this.case['CaseID'], [Validators.required,Validators.minLength(5), Validators.maxLength(10)]),
        ReferenceNumber: new FormControl(this.case['ReferenceNumber'], [Validators.required,Validators.minLength(5), Validators.maxLength(10)]),
        DueDate: new FormControl(this.case['DueDate'], [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        Name: new FormControl(this.case['Name'], [Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
        Description: new FormControl(this.case['Description'], [ Validators.required,Validators.minLength(5),Validators.maxLength(256)]),
        InsurerName: new FormControl(this.case['InsurerName'], [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
        PhoneNumber: new FormControl(this.case['PhoneNumber'], [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        EmailID: new FormControl(this.case['EmailID'], [Validators.required,Validators.email,Validators.maxLength(40)]),
        I_AddressLine1: new FormControl(this.case['I_AddressLine1'], [ Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        I_AddressLine2: new FormControl(this.case['I_AddressLine2'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        I_City: new FormControl(this.case['I_City'], [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        I_State: new FormControl(this.case['I_State'], [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        I_Pincode: new FormControl(this.case['I_Pincode'], [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
        I_Landmark: new FormControl(this.case['I_Landmark'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        InsurerVerificationNotes: new FormControl(this.case['InsurerVerificationNotes'],[Validators.required,Validators.minLength(5),Validators.maxLength(250)] ),
        ThirdpartyName: new FormControl(this.case['ThirdpartyName'], [Validators.required,Validators.minLength(2),Validators.maxLength(30)]),
        T_PhoneNumber: new FormControl(this.case['T_PhoneNumber'], [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        T_EmailID: new FormControl(this.case['T_EmailID'], [Validators.required,Validators.email,Validators.maxLength(40)]),
        T_AddressLine1: new FormControl(this.case['T_AddressLine1'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        T_AddressLine2: new FormControl(this.case['T_AddressLine2'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        T_City: new FormControl(this.case['T_City'], [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        T_State: new FormControl(this.case['T_State'], [Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
        T_Pincode: new FormControl(this.case['T_Pincode'], [Validators.required ,Validators.minLength(6),Validators.maxLength(6)]),
        T_Landmark: new FormControl(this.case['T_Landmark'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        T_VerificationNotes: new FormControl(this.case['T_VerificationNotes'], [ Validators.required,Validators.minLength(5),Validators.maxLength(250)]),

        CreatedBy: new FormControl(this.case['CreatedBy']),
        LastModifiedBy: new FormControl(this.case['LastModifiedBy']),
        insAddress: new FormControl(this.case['insAddress']),
        insDetails: new FormControl(this.case['insDetails']),
        tpartyDetails: new FormControl(this.case['tpartyDetails']),
        AddressLine1: new FormControl(this.case['AddressLine1']),
        AddressLine2: new FormControl(this.case['AddressLine2']),
        City: new FormControl(this.case['City']),
        State: new FormControl(this.case['State']),
        Landmark: new FormControl(this.case['Landmark']),
        Pincode: new FormControl(this.case['Pincode']),
       // I_CaseID: new FormControl(this.case['I_CaseID']),
        I_AddressID: new FormControl(this.case['I_AddressID']),
        T_AddressID: new FormControl(this.case['T_AddressID']),
      });
    });
  }

  // update

  get f() {
    return this.EditForm.controls;
  }

  ngOnInit(): void {}

  alertthis() {

    this.submitted = true;

    if (this.EditForm.invalid) {
      return
      //alert('invalid details');
    } else {
      debugger;
      //  alert("it's me !!")
      this.caseservice
        .update(this.route.queryParams, this.EditForm.value)
        .subscribe((result) => {
          console.log('Case Details updated!');

           swal( {
        icon:"success",
        title:"Case Details Updated Succesfully!!",
        buttons: [false],
        timer: 1500,
      });
      // debugger;
      this.router.navigate(['/products/digital/digital-product-list']);
        });
    }
  }

  // casedetailsupdate(){
  //   this.submitted = true;

  //   if (this.EditForm.invalid){
  //     return;
  //   }
  //   else{

  //      debugger;
  //   this.caseservice.update(this.route.queryParams,this.EditForm.value)
  //   .subscribe((result)=>{
  //     console.log("Case Details updated!");

  //     // this.toastrService.success('Case Details Updated');
  //     // window.alert("success")
  //     // swal("Hello world!");
  //     // swal({
  //     //   icon: "success",
  //     //   buttons: [false],
  //     // });

  //     // swal( {
  //     //   icon:"success",
  //     //   title:"Case Details Updated Succesfully!!",
  //     //   buttons: [false],
  //     //   timer: 1500,
  //     // });
  //     // // debugger;
  //     // this.router.navigate(['/products/digital/digital-product-list']);

  //   });
  //   }

  // }
}
