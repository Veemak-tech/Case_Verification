import { casedetails } from './../../../../models/casedetails';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-case-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss']
})
export class CaseEditComponent implements OnInit {
  private selectCaseID:number;
  @Input() Casedetails:casedetails;
  @Input() searchTerm:string;
  private _route: any;

  constructor(
    private httpClient:HttpClient, private _router:Router, route:ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.selectCaseID = +this._route.snapshot.paramMap.get('CaseID');
  }

  viewcasedetails(){
    this._router.navigate(['/casedetails', this.Casedetails.CaseID],{
      queryParams: {'searchTerm':this.searchTerm}
    });
  }

  editcasedetails(){
    this._router.navigate(['/edit', this.Casedetails.CaseID],);
  }

}
