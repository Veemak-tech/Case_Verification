import { address } from './../../../../models/address';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {


  name = 'Angular';

  public selectedOption: string;

  options = [
    { name: "first", value: 1 },
    { name: "two", value: 2 }
  ]


}

