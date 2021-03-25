import { environment } from './../../environments/environment';
import { casedetails } from './../models/casedetails';
import { tap } from 'rxjs/operators';
import { Params, Router } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';
import { DigitalListComponent } from '../components/products/digital/digital-list/digital-list.component'
import { User } from './../models/User';
import { catchError, first } from 'rxjs/operators';
import {Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { assignments } from '../models/assignments';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CasedetailsService {

  getDropDownText(id, object){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }

  getidforquestions(id, object){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }





  upload(file: File): Observable<HttpEvent<any>> {
    debugger
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.apicaasefileupload}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.apicaasefileupload}/files`);
  }









  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // public url = 'http://localhost:3000/casedetails';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router:Router
  ) {}

  createPost(formData, userId: Pick<User, 'id'>): Observable<casedetails> {
    debugger
     let userid = localStorage.getItem("id");
    return this.http
      .post<casedetails>(
        `${environment.apiUrlpostcase}`,
        {
          CaseID: formData.CaseID,
          name: formData.name,
          Description: formData.Description,
          InsurerVerificationNotes: formData.InsurerVerificationNotes,
          T_VerificationNotes: formData.T_VerificationNotes,
          ReferenceNumber: formData.ReferenceNumber,
          DueDate: formData.DueDate,
          CreatedBy: formData.CreatedBy,
          LastModifiedBy: userid,

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
      .pipe(first(),
        catchError(
          this.errorHandlerService.handleError<casedetails>('create Address')
        )
      );
  }

  getData(){
    // let url = "http://localhost:3000/casedetails";
    return this.http.get(`${environment.apiUrl}`);
  }

  getquestions(selectedid:any){
    debugger;
    return this.http.get(`${environment.apigetquestion}/${selectedid}`)
  }

  getpaging(pageno:number){
    debugger;
    return this.http.get(`${environment.apiUrlpostcase}/${pageno}/${10}`)
  }

  getByID(ID:number){
   // let url = "http://localhost:3000/casedetails/"+CaseID;
    return this.http.get(`${environment.apicasegetbyid}/${ID}`);
  }
  // delete

  deletecasedetails(id: number): Observable<DigitalListComponent> {
    const url = `${environment.apiUrlpostcase}/${id}`;
    return this.http.delete<DigitalListComponent>(url, this.httpOptions);
  }


  update(CaseID:Observable<Params>,data:any){
    debugger;
    return this.http.put<casedetails>(`${environment.apiUrlpostcase}`,{
      CaseID: data.CaseID,
      Name: data.Name,
      Description: data.Description,
      InsurerVerificationNotes: data.InsurerVerificationNotes,
      T_VerificationNotes: data.T_VerificationNotes,
      ReferenceNumber: data.ReferenceNumber,
      DueDate: data.DueDate,
      LastModifiedBy: data.LastModifiedBy,

      insDetails:{
        ID:data.ID,
        InsurerName: data.InsurerName,
        PhoneNumber: data.PhoneNumber,
        EmailID: data.EmailID,
        I_AddressID: data.I_AddressID,
        I_CaseID:data.I_CaseID
      },

      insAddress: {
        I_AddressID:data.I_AddressID,
        I_AddressLine1:data.I_AddressLine1,
        I_AddressLine2:data.I_AddressLine2,
        I_City:data.I_City,
        I_State:data.I_State,
        I_Pincode:data.I_Pincode,
        I_Landmark:data.I_Landmark
      },

      tpartyDetails: {
        ID: data.ID,
        ThirdpartyName: data.ThirdpartyName,
        T_PhoneNumber: data.T_PhoneNumber,
        T_EmailID: data.T_EmailID,
        T_VerificationNotes: data.T_VerificationNotes,
      },

      tpartyAddress: {
        ID:data.ID,
        T_AddressID:data.T_AddressID,
        T_AddressLine1:data.T_AddressLine1,
        T_AddressLine2:data.T_AddressLine2,
        T_City:data.T_City,
        T_State:data.T_State,
        T_Pincode:data.T_Pincode,
        T_Landmark:data.T_Landmark
      }
    },


    this.httpOptions)
  }




//case assign
  caseassign(formData,selectedRows:Pick<assignments, 'CaseID'>): Observable<assignments> {
debugger
    return this.http
      .post<assignments>(
        `${environment.apiassign}`,
        {
          CaseID: selectedRows,
          AppUserID:formData.AppUserID

        }
      )}

  // To catch error
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
