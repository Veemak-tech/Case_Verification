import { digitalCategoryDB } from './../shared/tables/digital-category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DigitalCategoryComponent } from '../components/products/digital/digital-category/digital-category.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CasedetailsService {

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  id(id: any) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/address';
  constructor(private http: HttpClient) {}

  getPostjobs() {
    return this.http.get(this.url);
  }


}
