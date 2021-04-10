import { assigndashboard } from './../../../../models/assign-dashboard';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-assignment-dashboard',
  templateUrl: './assignment-dashboard.component.html',
  styleUrls: ['./assignment-dashboard.component.scss']
})

export class AssignmentDashboardComponent implements OnInit {

  assignedcasedata: any;
  chart: Chart;


  constructor(
    private caseservice : CasedetailsService
  ) { }

  ngOnInit() {
    let casecount = [];
    let names = [];
    debugger;
    this.caseservice.numberofcases().subscribe(res =>{
      this.assignedcasedata = res
      console.log(this.assignedcasedata)
      for (let i = 0; i < res[0].length; i++)
      {
        casecount.push(res[0][i].casecount);
        names.push(res[0][i].Name);

      }

    })
    this.chart = new Chart ('canvas', {
      type: 'line',
      data: {
        labels: names,
        datasets :[{
          data: casecount,
          borderColor: "#3cba9f",
          fill: false
        },
      ]
      },
       options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
    }
  }
    )
  }
}
