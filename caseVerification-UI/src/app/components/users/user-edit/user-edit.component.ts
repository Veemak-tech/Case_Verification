import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  NgForm,
} from '@angular/forms';
import { userListDB } from 'src/app/shared/tables/list-users';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  userdetail: User;
  EditForm: FormGroup;
  userForm: NgForm;

  constructor(
    private user: AuthService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // const id:number = Number( this.route.snapshot.paramMap.get('id'));
    var id: number;

    // debugger;
    this.route.queryParams.subscribe((params) => {
      id = params['id'];
    });

    this.user.getDatabyID(id).subscribe((data: User) => {
      //debugger;
      console.warn(data);
      this.userdetail = data[0];
      this.EditForm = new FormGroup({
        name: new FormControl(data[0]['name']),
        email: new FormControl(data[0]['email']),
        RoleID: new FormControl(data[0]['RoleID']),
      });
    });
  }

  ngOnInit(): void {
    // this.EditForm= this.createFormGroup();
  }

  // createFormGroup(): FormGroup {
  //   return new FormGroup({
  //     name: new FormControl(data['name'], [Validators.required, Validators.minLength(5)]),
  //     email: new FormControl(['email'], [Validators.required, Validators.email]),
  //     RoleID: new FormControl(['RoleID'], [Validators.required, Validators.minLength(5)]),
}
