import { insurerDetails } from './../../../../models/insurerDetails';
import { address } from './../../../../models/address';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { questions }from './../../../../models/questions'
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
  mySelect: any;
  selectedValue: number;
  @Input() questiontypename;
  value:any;

  public selectedOption: string;
  selectedid: number;
  questiondata:questions;
  applyformdata:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private user: CasedetailsService
  ) {

    var ID: number;



    // this.user.getquestions(this.selectedid).subscribe((data) => {
    //   debugger
    //   console.log(data);
    //   console.log('user is working');
    //   //this.Agentname = data;
    // });
  }



public handle() {
  debugger
  var selectedid = this.selectedValue;
  console.log(selectedid)

  this.user.getquestions(selectedid).subscribe((data : questions) => {
    debugger
    console.log(data);
    console.log('user is working');
    this.questiondata = data;
debugger
    this.applyformdata = new FormGroup({

      questionid:new FormControl(this.questiondata['questionid'])
    })
  });
  //alert("selected option's value is " + this.selectedValue);
}



  options = [
    { name: 'Child', value: 1 },
    { name: 'Adult', value: 2 },
    { name: 'SeniorCitizen', value:3}
  ];
}
