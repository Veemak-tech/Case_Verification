import { CasedetailsService } from './../../../../services/casedetails.service';
import { AddressService } from './../../../../services/address.service';
import { address } from './../../../../models/address';
import { casedetails} from './../../../../models/casedetails';
import { first } from 'rxjs/operators';
import { FormControl, FormGroup,Validators,NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { digitalCategoryDB } from 'src/app/shared/tables/digital-category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-digital-category',
  templateUrl: './digital-category.component.html',
  styleUrls: ['./digital-category.component.scss'],
})
export class DigitalCategoryComponent implements OnInit {
  @ViewChild ("userPost") userPost: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;


  isOpen = false;

  constructor(
    private AddressService: AddressService,
    private CasedetailsService: CasedetailsService,
    private modalService: NgbModal,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.digital_categories = digitalCategoryDB.digital_category;
  }

  public closeResult: string;
  public digital_categories = [];




onSubmit(formData): void {


this.AddressService
this.CasedetailsService


  .createPost(formData, this.authService.userId)
  .pipe(first())
  .subscribe(() => {
    this.create.emit(null);
  });
  // this.form.reset();
  // this.userPost.resetForm();
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

  ngOnInit() {}
}
