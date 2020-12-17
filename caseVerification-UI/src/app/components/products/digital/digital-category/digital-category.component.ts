import { Component, OnInit } from '@angular/core';
import { digitalCategoryDB } from 'src/app/shared/tables/digital-category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-digital-category',
  templateUrl: './digital-category.component.html',
  styleUrls: ['./digital-category.component.scss']
})
export class DigitalCategoryComponent implements OnInit {
  data:any;
  public closeResult: string;
  public digital_categories = []



  onSubmit(data: any)
  {
    this.http.post('http://localhost:3900/casedetails', data)
    .subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);


    this.http.post('http://localhost:5000/address', data)
    .subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);


    this.http.post('http://localhost:4300/insurerdetail', data)
    .subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);

    this.http.post('http://localhost:4700/thirdpartydetails', data)
    .subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
  }

  constructor(private modalService: NgbModal, private http: HttpClient,) {
    this.digital_categories = digitalCategoryDB.digital_category;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
      position: 'right'
    },
    columns: {
      img: {
        title: 'Image',
        type: 'html',
      },
      product_name: {
        title: 'Name'
      },
      price: {
        title: 'Price'
      },
      status: {
        title: 'Status',
        type: 'html',
      },
      category: {
        title: 'Category',
      }
    },
  };

  ngOnInit() {
  }

}
