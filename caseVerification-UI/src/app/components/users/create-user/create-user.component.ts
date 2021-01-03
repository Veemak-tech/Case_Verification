import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AdminauthService } from "src/app/services/adminauth.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  RegisterForm: FormGroup;

  constructor(private adminauthService: AdminauthService, private router: Router) {}

  ngOnInit(): void {
    this.RegisterForm= this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  signup(): void {
    this.adminauthService.signup(this.RegisterForm.value).subscribe((msg) => {
      console.log(msg);
      console.log("user registerd");
    
    });
  }
}