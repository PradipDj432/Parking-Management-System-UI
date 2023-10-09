import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonservicesService } from 'src/app/services/commonservices.service';
import { WatchmanservicesService } from 'src/app/services/watchmanservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router,
              private watchmanservices: WatchmanservicesService,
              private commonservices : CommonservicesService){}
  watchmandashboard:
  {
    TotalParkingSlots:number,
    TotalTwoWheelerParkingSlots:number,
    TotalFourWheelerParkingSlots:number,
    TotalInUseParkingSlots:number,
    TotalInUseTwoWheelerParkingSlots:number,
    TotalInUseFourWheelerParkingSlots:number,
    TwoWheelerParkingCharge:number,
    FourWheelerParkingCharge:number,
    TwoWheelerPenaltyCharge:number,
    FourWheelerPenaltyCharge:number,
    TotalRevenue:number
  }=
  {
    TotalParkingSlots:0,
    TotalTwoWheelerParkingSlots:0,
    TotalFourWheelerParkingSlots:0,
    TotalInUseParkingSlots:0,
    TotalInUseTwoWheelerParkingSlots:0,
    TotalInUseFourWheelerParkingSlots:0,
    TwoWheelerParkingCharge:0,
    FourWheelerParkingCharge:0,
    TwoWheelerPenaltyCharge:0,
    FourWheelerPenaltyCharge:0,
    TotalRevenue:0
  }
  companyemail:any
  ngOnInit(): void 
  {
    this.companyemail = sessionStorage.getItem('companyemail')
    this.watchmanservices.GetWatchmanDashBoardS(this.companyemail).
    subscribe(data => {this.watchmandashboard = data; console.log(this.watchmandashboard)})
  }

  
  getdashboard()
   {
    this.router.navigate(['watchman/dashboard'])
   }
   getprintslip()
   {
    this.router.navigate(['watchman/printslip'])
   }
   getviwebooking()
   {
    this.router.navigate(['watchman/viwebooking'])
   }
   getaddbooking()
   {
    this.router.navigate(['watchman/addbooking'])
   }
   getcharges()
   {
    this.router.navigate(['watchman/charges'])
   }
}
