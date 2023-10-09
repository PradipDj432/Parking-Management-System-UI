import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyservicesService } from 'src/app/services/companyservices.service';
import * as Highcharts from 'highcharts'
@Component({
  selector: 'app-reportcompany',
  templateUrl: './reportcompany.component.html',
  styleUrls: ['./reportcompany.component.css']
})
export class ReportcompanyComponent {
  chart:any
  watchmandashboard:
    {
      TotalParkingSlots: number,
      TotalTwoWheelerParkingSlots: number,
      TotalFourWheelerParkingSlots: number,
      TotalInUseParkingSlots: number,
      TotalInUseTwoWheelerParkingSlots: number,
      TotalInUseFourWheelerParkingSlots: number,
      TwoWheelerParkingCharge: number,
      FourWheelerParkingCharge: number,
      TwoWheelerPenaltyCharge: number,
      FourWheelerPenaltyCharge: number,
      TotalRevenue: number
    } =
    {
      TotalParkingSlots: 0,
      TotalTwoWheelerParkingSlots: 0,
      TotalFourWheelerParkingSlots: 0,
      TotalInUseParkingSlots: 0,
      TotalInUseTwoWheelerParkingSlots: 0,
      TotalInUseFourWheelerParkingSlots: 0,
      TwoWheelerParkingCharge: 0,
      FourWheelerParkingCharge: 0,
      TwoWheelerPenaltyCharge: 0,
      FourWheelerPenaltyCharge: 0,
      TotalRevenue: 0
    }
  constructor(private router:Router,
              private companyservice:CompanyservicesService){}
   ngOnInit()
   {
    this.watchmandashboard=this.companyservice.GetReportDataS();
    console.log(this.watchmandashboard);
    this.GetCreateChart1()
   }

   GetCreateChart1()
   {
    
    this.chart = {
      chart: {
        type: 'column',
        backgroundColor: '#36394B'
      },
      title: {
        text: 'Web Skills People are Envious Of',
        style: {  
         color: '#fff'
        }
      },
      xAxis: {
        tickWidth: 0,
        labels: {
         style: {
           color: '#fff',
           }
         },
        categories: [
          'Management', 
          'Marketing'
        ]
      },
      yAxis: {
        gridLineWidth: .5,
        gridLineDashStyle: 'dash',
        gridLineColor: 'black',
        title: {
          text: '',
          style: {
           color: '#fff'
           }
        }
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false
      },
      tooltip: {
        valuePrefix: ''
      },
      plotOptions: {
        column: {
          borderRadius: 0,
          pointPadding: 0,
          groupPadding: 0
        } 
      },
      series: [{
        name: 'People',
        data: [
          {
            name: 'Management',
            data: [
              {
                name: 'Category 1',
                y: 123
              },
              {
                name: 'Category 2',
                y: 456
              }
            ]
          },
          {
            name: 'Marketing',
            data: [
              {
                name: 'Category 1',
                y: 789
              },
              {
                name: 'Category 2',
                y: 321
              }
            ]
          }
        ]
      }]
    }
    
    Highcharts.chart('chartid',this.chart);
  }
  
   getdashboard()
   {
    this.router.navigate(['company/dashboard'])
   }
   getreports()
   {
    this.router.navigate(['company/report'])
   }
   geteditprofile()
   {
    this.router.navigate(['company/editprofile'])
   }
}
