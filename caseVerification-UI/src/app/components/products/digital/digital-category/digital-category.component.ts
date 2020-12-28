import { AddressService } from './../../../../services/address.service';
import { address } from './../../../../models/address';
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
    private modalService: NgbModal,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.digital_categories = digitalCategoryDB.digital_category;
  }

  public closeResult: string;
  public digital_categories = [];

createFormGroup(): FormGroup {
  return new FormGroup ({
    AddressLine1: new FormControl ("", [
      Validators.required,
      Validators.minLength(5),
    ]),
    AddressLine2: new FormControl ("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    City: new FormControl ("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    Landmark: new FormControl ("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    State: new FormControl ("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    Pincode: new FormControl ("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    // GEOLocation: new FormControl ("", [
    //   Validators.required,
    //   Validators.minLength(10),
    // ]),
    // CreatedBy: new FormControl ("", [
    //   Validators.required,
    //   Validators.minLength(10),
    // ]),
    // LastModifiedBy: new FormControl ("", [
    //   Validators.required,
    //   Validators.minLength(10),
    // ]),
  });
}

onSubmit(formData: Pick<address, "AddressLine1" | "AddressLine2" | "City" | "Landmark" | "State" | "Pincode" >): void {
  debugger;
  this.AddressService
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
