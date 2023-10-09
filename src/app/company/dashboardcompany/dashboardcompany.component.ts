import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyservicesService } from 'src/app/services/companyservices.service';

@Component({
  selector: 'app-dashboardcompany',
  templateUrl: './dashboardcompany.component.html',
  styleUrls: ['./dashboardcompany.component.css']
})
export class DashboardcompanyComponent {
  companyemail: string = "";
  constructor(private router: Router,
    private companyservices: CompanyservicesService) { }

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

  ngOnInit(): void {
    this.companyemail = this.companyservices.GetDataCompanyS();
    this.companyservices.GetCompanyDashBoardS(this.companyemail).
      subscribe(data => { this.watchmandashboard = data;
                          this.companyservices.SetReportDataS(this.watchmandashboard);
      })
      
  }

  getdashboard() {
    this.router.navigate(['company/dashboard'])
  }
  getreports() {
    this.router.navigate(['company/report'])
  }
  geteditprofile() {
    this.router.navigate(['company/editprofile'])
  }
}
