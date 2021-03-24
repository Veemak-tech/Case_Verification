import { Router, Data } from '@angular/router';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { address } from './../../../../models/address';
import { casedetails } from './../../../../models/casedetails';
import { first } from 'rxjs/operators';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { digitalCategoryDB } from 'src/app/shared/tables/digital-category';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { Observable } from 'rxjs';
import { questions } from 'src/app/models/questions';

const URL = './src/assets/images';

function readBase64(file): Promise<any> {
  var reader  = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}

@Component({
  selector: 'app-digital-category',
  templateUrl: './digital-category.component.html',
  styleUrls: ['./digital-category.component.scss'],
})
export class DigitalCategoryComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  dynamicformarray : any;
  dynamicformarray2 :any;

  fileInfos: Observable<any>;

  ngOnInit(): void {

    var selectedid1 = 1;

    this.CasedetailsService.getquestions(selectedid1).subscribe((data: questions) => {
      this.dynamicformarray = data;
      console.log(this.dynamicformarray);
    })

    var selectedid2 = 2;
    this.CasedetailsService.getquestions(selectedid2).subscribe((data: questions) => {
      this.dynamicformarray2 = data;
      console.log(this.dynamicformarray);
    })


    this.fileInfos = this.CasedetailsService.getFiles();
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.CasedetailsService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.CasedetailsService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }







  @ViewChild("userPost") userPost: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Input() agents;


  form: FormGroup;
  faUserCheck = faUserCheck;


  isOpen = false;
  files: [];
  name: []
  url: string | ArrayBuffer = '';

  constructor(
    private CasedetailsService: CasedetailsService,
    private modalService: NgbModal,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.files = [];

    this.digital_categories = digitalCategoryDB.digital_category;

    this.authService.getName().subscribe((data) => {
      console.log(data);
      console.log('Agent name Fetch Working!!');
      this.agents = data;
    });
  }


  public closeResult: string;
  public digital_categories = [];



//-------------------------------------------Create Case----------------------------------



  onSubmit(formData): void {
     debugger;
     for (const fl of this.files) {
       formData.append('image', fl,fl);
       console.log(File.name, fl)
  }
    this.CasedetailsService.createPost(formData, this.authService.userId).pipe(first()).subscribe(() => { this.create.emit(null); });
    swal({
      icon: "success",
      title: "Submitted Successfully",
      buttons: [false],
      timer: 1500,
    });
    // debugger;
    this.router.navigate(['/products/digital/digital-product-list']);
    // this.form.reset();
    // this.userPost.resetForm();
  }

  // onSelectFile(event) {
  //   debugger
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     this.files = event.target.files;
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     }
  //   }
  // }



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
