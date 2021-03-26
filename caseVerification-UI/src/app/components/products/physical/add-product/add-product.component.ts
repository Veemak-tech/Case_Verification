import { questions } from './../../../../models/questions';
import { Router, Data } from '@angular/router';
import { CasedetailsService } from './../../../../services/casedetails.service';
import {
  FormControl,
  FormGroup,
  Validators,
  NgForm,
  FormsModule,
  FormBuilder,
} from '@angular/forms';
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
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert';
import { first } from 'rxjs/operators';

const URL = './src/assets/images';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  RegisterForm: FormGroup;
  form: FormGroup;
  submitted = false;
  @Input() agents;
  @Output() create: EventEmitter<any> = new EventEmitter();
  ins_questionsarray: any;
  t_questionsarray: any;

  constructor(
    private CasedetailsService: CasedetailsService,
    private modalService: NgbModal,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    // Agents name
    this.authService.getName().subscribe((data) => {
      console.log(data);
      console.log('Agent name Fetch Working!!');
      this.agents = data;
    });
  }

  get f() {
    return this.RegisterForm.controls;
  }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      CaseID: ['', Validators.required],
      name: ['', Validators.required],
      ReferenceNumber: ['', Validators.required],
      DueDate: ['', Validators.required],
      Description: ['', Validators.required],
      InsurerName: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      EmailID: ['', [Validators.required, Validators.email]],
      AddressLine1: ['', Validators.required],
      AddressLine2: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Pincode: ['', Validators.required],
      Landmark: ['', Validators.required],
      InsurerVerificationNotes: ['', Validators.required],
      ThirdpartyName: ['', Validators.required],
      T_PhoneNumber: ['', Validators.required],
      T_EmailID: ['', Validators.required],
      T_AddressLine1: ['', Validators.required],
      T_AddressLine2: ['', Validators.required],
      T_City: ['', Validators.required],
      T_State: ['', Validators.required],
      T_Pincode: ['', Validators.required],
      T_Landmark: ['', Validators.required],
      T_VerificationNotes: ['', Validators.required],
    });

    // to get Questions
    // Ins question
    var selectedid = 1;
    this.CasedetailsService.getquestions(selectedid).subscribe(
      (questionsdata: questions) => {
        this.ins_questionsarray = questionsdata;
        console.log(this.t_questionsarray);

        // t party questions
        var selectedid2 = 2;
        this.CasedetailsService.getquestions(selectedid2).subscribe(
          (t_questionsdata: questions) => {
            this.t_questionsarray = t_questionsdata;
            console.log(this.t_questionsarray);
          }
        );
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      return;
    } else {
      this.CasedetailsService.createPost(
        this.RegisterForm.value
      ).subscribe((msg) => {});
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RegisterForm.value, null, 4));
  }
}
