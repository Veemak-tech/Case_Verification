import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FreeapiserviceService {

  constructor(private httpclient: HttpClient) { }

  getcomments():Observable<any>{

    return this.httpclient.get("https://localhost:3000/address")

  }


}
