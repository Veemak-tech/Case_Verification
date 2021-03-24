import { FormData } from './../../../../shared/interface/form-data';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MockForm } from 'src/app/shared/mock/mock-data';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  data = MockForm;

  @Input()formData: FormData[];

  constructor() {}

  /** Setting up our form **/
  ngOnInit() {
    const formGroup = {};

    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
}
}
