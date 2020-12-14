import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CaseverificationService {

  constructor(
    private http:HttpClient
  ) { }

  getData(){
    let url="http://localhost:3900/casedetails";
    return this.http.get(url);
  }
}
