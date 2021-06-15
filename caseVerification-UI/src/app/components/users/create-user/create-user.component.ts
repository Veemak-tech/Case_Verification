import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthService } from "src/app/services/auth.service";
import swal from 'sweetalert';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  RegisterForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.RegisterForm= this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),]),
        RoleID: new FormControl("", [Validators.required, Validators.minLength(5)]),
    });
  }

  signup(): void {
    this.authService.signup(this.RegisterForm.value).subscribe((msg) => {
      console.log(msg);
      swal( {
        icon:"success",
        title:"User Created Succesfully!!",
        buttons: [false],
        timer: 1500,
      });
      console.log("user registerd");
      this.router.navigate(['/users/list-user']);

    });
  }
}
