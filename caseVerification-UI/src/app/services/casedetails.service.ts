import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';
import { DigitalListComponent } from '../components/products/digital/digital-list/digital-list.component'
import { User } from './../models/User';
import { catchError, first } from 'rxjs/operators';
import {Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { casedetails } from '../models/casedetails';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CasedetailsService {
  private url = 'http://localhost:3000/casedetails';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private ErrorHandlerService: ErrorHandlerService,
    private router:Router
  ) {}

  createPost(formData, userId: Pick<User, 'id'>): Observable<casedetails> {
    return this.http
      .post<casedetails>(
        this.url,
        {
          CaseID: formData.CaseID,
          Name: formData.Name,
          Description: formData.Description,
          InsurerVerificationNotes: formData.InsurerVerificationNotes,
          T_VerificationNotes: formData.T_VerificationNotes,
          ReferenceNumber: formData.ReferenceNumber,
          DueDate: formData.DueDate,
          CreatedBy: formData.CreatedBy,
          LastModifiedBy: formData.LastModifiedBy,


          insAddress: {
            AddressLine1: formData.AddressLine1,
            AddressLine2: formData.AddressLine2,
            City: formData.City,
            Landmark: formData.Landmark,
            State: formData.State,
            Pincode: formData.Pincode,
          },

          insDetails:{
            CaseID: formData.CaseID,
            InsurerName: formData.InsurerName,
            PhoneNumber: formData.PhoneNumber,
            AlternativePhoneNumber: formData.AlternativePhoneNumber,
            EmailID: formData.EmailID,
            AddressID: formData.AddressID
          },

          tpartyAddress: {
            AddressLine1: formData.T_AddressLine1,
            AddressLine2: formData.T_AddressLine2,
            City: formData.T_City,
            Landmark: formData.T_Landmark,
            State: formData.T_State,
            Pincode: formData.T_Pincode,
          },

          tpartyDetails: {
            CaseID: formData.CaseID,
            ThirdpartyName: formData.ThirdpartyName,
            T_PhoneNumber: formData.T_PhoneNumber,
            T_AlternativePhoneNumber: formData.T_AlternativePhoneNumber,
            T_EmailID: formData.T_EmailID,
            T_AddressID: formData.T_AddressID,
            T_PhotoDocID: formData.T_PhotoDocID,
            T_AudioDocID: formData.T_AudioDocID,
            T_VideoDocID: formData.T_VideoDocID,
            T_PhotoWithSelfieDocID: formData.T_PhotoWithSelfieDocID,
            T_VerificationNotes: formData.T_VerificationNotes,
          }

        },
        this.httpOptions
      )
      .pipe(
        catchError(
          this.ErrorHandlerService.handleError<casedetails>('create Address')
        )
      );
  }

  getData(){
    let url = "http://localhost:3000/casedetails";
    return this.http.get(url);
  }

  getByID(CaseID:number){
    let url = "http://localhost:3000/casedetails/"+CaseID;
    return this.http.get(url);
  }
  // delete

  deletecasedetails(id: number): Observable<DigitalListComponent> {
    const url = `${this.url}/${id}`;
    return this.http.delete<DigitalListComponent>(url, this.httpOptions);
  }
}
