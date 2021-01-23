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

  

  constructor(
    private user: AuthService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
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
        id : new FormControl(this.userdetail['id']),
        name: new FormControl(this.userdetail['name']),
        email: new FormControl(this.userdetail['email']),
        password: new FormControl(this.userdetail['password']),
        RoleID: new FormControl(this.userdetail['RoleID']),
     });
     
     
    });
    
  }

  ngOnInit() {

  }
  update(){
    this.user.update(this.route.queryParams,this.EditForm.value).subscribe((result)=>
  {
console.log(result);
console.log("its working2662");

this.router.navigate(['/users/list-user']);
}
    );
    
  }
}
  