import { assigndashboard } from './../../../../models/assign-dashboard';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-assignment-dashboard',
  templateUrl: './assignment-dashboard.component.html',
  styleUrls: ['./assignment-dashboard.component.scss']
})

export class AssignmentDashboardComponent implements OnInit {

  assignedcasedata: any;


  constructor(
    private caseservice : CasedetailsService
  ) { }

  ngOnInit(): void {
    this.caseservice.numberofcases().subscribe((casecountdata)=>{
      this.assignedcasedata = casecountdata;
      console.log(this.assignedcasedata)
    })
  }

}
