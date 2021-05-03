import { questions } from './../../../../models/questions';
import { questionoptions } from './../../../../models/questionoptions';
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
import { Observable } from 'rxjs';

const URL = './src/assets/images';

@Component({
  selector: 'app-digital-category',
  templateUrl: './digital-category.component.html',
  styleUrls: ['./digital-category.component.scss'],
})
export class DigitalCategoryComponent implements OnInit {
  RegisterForm: FormGroup;
  form: FormGroup;
  submitted = false;
  @Input() agents;
  @Output() create: EventEmitter<any> = new EventEmitter();
  ins_questionsarray: any;
  t_questionsarray: any;
  questionoptionsarray: questionoptions[];

  selectedFiles: FileList;
  filename: string;
  filesize: any;
  filesizeinkb: any;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  closeResult: string;

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
     // console.log(data);
      console.log('Agent name Fetch Working!!');
      this.agents = data;
    });
  }

  get f() {
    return this.RegisterForm.controls;
  }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      CaseID: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      name: ['', Validators.required],
      ReferenceNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      DueDate: ['', Validators.required],
      Description: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(256),
        ],
      ],
      InsurerName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      PhoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      EmailID: ['', [Validators.required, Validators.email]],
      AddressLine1: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      AddressLine2: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      City: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      State: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      Pincode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      Landmark: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      InsurerVerificationNotes: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
      ThirdpartyName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      T_PhoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      T_EmailID: ['', [Validators.required, Validators.email]],
      T_AddressLine1: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      T_AddressLine2: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      T_City: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      T_State: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      T_Pincode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      T_Landmark: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      T_VerificationNotes: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
      FileUpload: ['', Validators.required],
    });

    // to get Questions
    // Ins question
    var selectedid = 1;
    this.CasedetailsService.getquestions(selectedid).subscribe(
      (questionsdata: questions) => {
        this.ins_questionsarray = questionsdata;
        //console.log(this.t_questionsarray);

        // t party questions
        var selectedid2 = 2;
        this.CasedetailsService.getquestions(selectedid2).subscribe(
          (t_questionsdata: questions) => {
            this.t_questionsarray = t_questionsdata;
            // console.log(this.t_questionsarray);
            var optionlist;
            // question options
            this.CasedetailsService.getquestionoptions(selectedid).subscribe(
              (questionoptionslist: questionoptions) => {
                 optionlist = questionoptionslist;
                console.log(questionoptionslist);
              }
            );
            debugger
             this.questionoptionsarray = optionlist;
            this.t_questionsarray.forEach(element => {
              debugger
              element.questionoptions = this.questionoptionsarray.filter(p => p.questionid === element.questionid)

            });
          }
        );
      }
    );
  }

  upload(): void {
    debugger;
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.CasedetailsService.upload(this.currentFile,this.message).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.CasedetailsService.getFiles();
        }
      },
      (err) => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
    );

    this.selectedFiles = undefined;
  }

  selectFile(event): void {
    debugger;
    this.selectedFiles = event.target.files;

    this.filesizeinkb = event.target.files[0].size;

    this.currentFile = this.selectedFiles.item(0);

    if (this.filesizeinkb > 4307840  )
    {
      alert("Select file below 4 MB");
      return event = null
    }
    else{
      this.filename = event.target.files[0].name;
      this.filesize = this.filesizeinkb / 1024;
    }

    console.log(this.filename);
    console.log(this.selectedFiles);
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
        var casecreatFile_Upload = "CaseCreation-"
      this.currentFile = this.selectedFiles.item(0);
      this.CasedetailsService.upload(this.currentFile,casecreatFile_Upload).subscribe(
        (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.CasedetailsService.getFiles();
          }
        },
        (err) => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        }
      );

      swal({
        icon: 'success',
        title: 'Created Successfully',
        buttons: [false],
        timer: 1500,
      });
      this.router.navigate(['/products/digital/digital-product-list']);
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.RegisterForm.value, null, 4));
  }

  // -----------------------------------------pre default codes...(dont change below )-----------------------------------------------------

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public settings = {
    actions: {
      position: 'right',
    },
    columns: {
      img: {
        title: 'Image',
        type: 'html',
      },
      product_name: {
        title: 'Name',
      },
      price: {
        title: 'Price',
      },
      status: {
        title: 'Status',
        type: 'html',
      },
      category: {
        title: 'Category',
      },
    },
  };
}
