import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Params, Router } from "@angular/router";
import { NgModule } from '@angular/core';

import { Observable, BehaviorSubject } from "rxjs";
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

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  getData(){
    //let url="http://localhost:3000/auth";
    return this.http.get(`${environment.apiauth}`);

  }
  getDatabyID(id : number){
    // let url="http://localhost:3000/auth/"+id;
    return this.http.get(`${environment.apiauth}/${id}`);

  }


  signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup"))
      );
  }
  update(id: Observable<Params> ,data: any){
    // debugger
return this.http.put(`${this.url}`,data);

  }


  login(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    userId: Pick<User, "id">;
  }> {
    return this.http
      .post(`${this.url}/login`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          console.log("login works");

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



