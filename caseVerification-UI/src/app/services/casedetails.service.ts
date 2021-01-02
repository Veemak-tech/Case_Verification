import { ErrorHandlerService } from './error-handler.service';
import { User } from './../models/User';
import { catchError, first } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
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
    private ErrorHandlerService: ErrorHandlerService
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
          ThirdpartyVerificationNotes: formData.ThirdpartyVerificationNotes,
          CreatedBy: formData.CreatedBy,
          LastModifiedBy: formData.LastModifiedBy,
          insAddress: {
            AddressLine1: formData.AddressLine1,
            AddressLine2: formData.AddressLine2,
            City: formData.City,
            Landmark: formData.Landmark,
            State: formData.State,
            Pincode: formData.Pincode,
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
}
