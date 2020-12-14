import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-casecreation',
  templateUrl: './casecreation.component.html',
  styleUrls: ['./casecreation.component.scss']
})
export class CasecreationComponent implements OnInit {
  data: any;

  constructor(
    private http: HttpClient,
  ) { }

  onSubmit(data: any)
  {
    this.http.post('http://localhost:3900/casedetails', data)
    .subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
  }

  ngOnInit(): void {
  }

}
