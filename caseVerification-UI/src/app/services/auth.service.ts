import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Params, Router } from "@angular/router";
import { NgModule, Output, EventEmitter } from '@angular/core';

import { Observable, BehaviorSubject, Subject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";


@Injectable({
  providedIn: "root",
})
export class AuthService {


  private url = "http://localhost:3000/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  name: Pick<User, "name">;


  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    // public usermodel: User
  ) {}

  getData(){
    //let url="http://localhost:3000/auth";
    return this.http.get(`${environment.apiauth}`);

  }
  debugger
  getName(){
    return this.http.get(`${environment.apiauth}`);
  }
  getDatabyID(id : number){
    // let url="http://localhost:3000/auth/"+id;
    return this.http.get(`${environment.apiauth}/${id}`);

  }


  signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${environment.apiauthsignup}`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup"))
      );
  }
  update(id: Observable<Params> ,data: any){
    // debugger
return this.http.put(`${environment.apiauth}`,data);

  }


  login(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    userId: Pick<User, "id">;
  }> {

    return this.http.post(`${environment.apiauthlogin}`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id">; name:Pick<User, "name"> }) => {
          debugger;
          this.userId = tokenObject.userId;
          this.name = tokenObject.name;
          localStorage.setItem("token", tokenObject.token);
          localStorage.setItem("id", tokenObject.userId.toString());
          localStorage.setItem("userName", tokenObject.name.toString());
          this.isUserLoggedIn$.next(true);

          this.router.navigate(["/products/digital/digital-category"]);

        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<User, "id">;
          }>("login")
        )

      );


  }


}



