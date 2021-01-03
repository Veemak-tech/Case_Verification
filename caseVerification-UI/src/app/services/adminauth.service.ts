import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { admin } from "../models/admin";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class AdminauthService {
  private url = "http://localhost:3000/adminauth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<admin, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}
  getData(){
    let url="http://localhost:3000/adminauth";
    return this.http.get(url);

  }

  signup(user: Omit<admin, "id">): Observable<admin> {
    return this.http
      .post<admin>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<admin>("signup"))
      );
      }
  
  login(email: Pick<admin, "email">,
    password: Pick<admin, "password">
  ): Observable<{
    token: string;
    userId: Pick<admin, "id">;
  }> {
    return this.http
      .post(`${this.url}/login`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<admin, "id"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          // this.router.navigate([""]);
          console.log("admin works");
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<admin, "id">;
          }>("login")
        )
      );
  }
}


  
