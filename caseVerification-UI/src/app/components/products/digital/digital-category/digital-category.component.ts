import { Router, Data } from '@angular/router';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { AddressService } from './../../../../services/address.service';
import { address } from './../../../../models/address';
import { casedetails } from './../../../../models/casedetails';
import { first } from 'rxjs/operators';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { digitalCategoryDB } from 'src/app/shared/tables/digital-category';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-digital-category',
  templateUrl: './digital-category.component.html',
  styleUrls: ['./digital-category.component.scss'],
})
export class DigitalCategoryComponent implements OnInit {
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
    private AddressService: AddressService,
    private CasedetailsService: CasedetailsService,
    private modalService: NgbModal,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.files = [];

    this.digital_categories = digitalCategoryDB.digital_category;

    this.authService.getName().subscribe((data) => {
      console.warn(data);
      console.log('user is working');
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

  onSelectFile(event) {
    debugger
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.files = event.target.files;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
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

  ngOnInit() { }
}
