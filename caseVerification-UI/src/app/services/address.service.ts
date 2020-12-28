import {ErrorHandlerService } from './error-handler.service';
import { User } from './../models/User';
import { catchError, first } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { address } from "../models/address";


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private url = "http://localhost:3000/address"

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type" : "application/json" }),
  };

  constructor(
    private http:HttpClient,
    private ErrorHandlerService : ErrorHandlerService
  ) { }

  createPost(
    formData: Partial<address>,
    userId: Pick<User, "id">
  ): Observable <address> {
    return this.http
    .post<address>(
      this.url,
      { AddressLine1: formData.AddressLine1, AddressLine2: formData.AddressLine2, City: formData.City, Landmark: formData.Landmark, State:formData.State, Pincode:formData.Pincode},
      this.httpOptions
    )
    .pipe(
      catchError(this.ErrorHandlerService.handleError<address>("create Address"))
    );
  }
}


