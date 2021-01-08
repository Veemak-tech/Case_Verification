import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-case-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss']
})
export class CaseEditComponent implements OnInit {

  constructor(
    private httpClient:HttpClient, private router:Router
  ) { }

  public onCustomAction(event){
    switch(event.action) {
      case 'viewrecord':
        this.viewRecord(event.data);
        break;
    }
  }

  public viewRecord(formData:any){
    let rowData = formData;
    let CaseID = rowData.CaseID;
    let Name= rowData.Name;
    let Description = rowData.Description;
    let InsurerVerificationNotes = rowData.InsurerVerificationNotes;
    let T_VerificationNotes = rowData.T_VerificationNotes;
    let CreatedBy = rowData.CreatedBy;
  }

  ngOnInit(): void {
  }

}
