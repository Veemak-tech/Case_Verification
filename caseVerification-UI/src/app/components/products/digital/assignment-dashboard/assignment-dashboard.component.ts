import { assigndashboard } from './../../../../models/assign-dashboard';
import { CasedetailsService } from './../../../../services/casedetails.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-assignment-dashboard',
  templateUrl: './assignment-dashboard.component.html',
  styleUrls: ['./assignment-dashboard.component.scss']
})

export class AssignmentDashboardComponent implements OnInit {

  assignedcasedata: any;
  chart = [];




  constructor(
    private caseservice : CasedetailsService
  ) { }
//////////////////////////
// bar chart options
public barChartOptions: ChartOptions = {
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: { xAxes: [{}], yAxes: [{}] },
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
};

// pie chart options
public pieChartOptions: ChartOptions = {
  responsive : true,
  scales : { xAxes : [{}], yAxes : [{}] },
  plugins : {
    datalabels: {
      anchor: 'end',
      align: 'end',
    }
  }
};


// bar chart
public barChartLabels: Label[] = [];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [pluginDataLabels];

public barChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }

];

// pie chart
public pieChartLabels: Label[] = [];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [pluginDataLabels];

public pieChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }

];





///////////////////////////////

  ngOnInit() {
    let casecount = [];
    let names = [];
    debugger;
    this.caseservice.numberofcases().subscribe((res : any[]) =>{
      debugger
      this.assignedcasedata = res
      console.log(this.assignedcasedata)
      for (let i = 0; i < res.length; i++)
      {
        casecount.push(res[i].casecount);
        names.push(res[i].Name);

      }
      // bar chart
      this.barChartLabels = names;
      this.barChartData = [
        {data : casecount, label: 'Assigned Cases' },
        //{data : [5,2,34], label: 'Assigned Cases2'}
      ]

      // pie chart
      this.pieChartLabels = names;
      this.pieChartData = [
        {data : casecount, label : 'Assigned Cases'}
      ]

      console.log(names)
      console.log(casecount)

    })
  //   this.chart = new Chart ('canvas', {
  //     type: 'line',
  //     data: {
  //       labels: names,
  //       datasets :[{
  //         data: casecount,
  //         borderColor: "#3cba9f",
  //         fill: false
  //       },
  //     ]
  //     },
  //      options: {
  //           legend: {
  //             display: false
  //           },
  //           scales: {
  //             xAxes: [{
  //               display: true
  //             }],
  //             yAxes: [{
  //               display: true
  //             }],
  //           }
  //   }
  // }
  //   )




  }
}
