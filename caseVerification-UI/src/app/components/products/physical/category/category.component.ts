import { address } from './../../../../models/address';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { casedetails } from './../../../../models/casedetails';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { digitalListDB } from 'src/app/shared/tables/digital-list';
import { HttpClient } from '@angular/common/http';
import { allIcons } from 'ngx-bootstrap-icons';
import { multicast } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  name = 'Angular';

  form: FormGroup;
  pagesize = [];
  pageno: any = {};

  public selectedOption: string;

  constructor() {}

  options = [
    { name: 'Child', value: 1 },
    { name: 'Adult', value: 2 },
    { name: 'SeniorCitizen', value:3}
  ];
}
