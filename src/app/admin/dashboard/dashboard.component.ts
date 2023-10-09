import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminservicesService } from 'src/app/services/adminservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router,
              private adminservices:AdminservicesService){}

   admindashboard: {
    totalcompany: number,
    totalfourwheeler: number,
    totalinuse: number,
    totalinusefour: number,
    totalinusetwo: number,
    totalparking: number,
    totaltwowheeler: number}=
    {
      totalcompany: 0,
      totalfourwheeler: 0,
      totalinuse: 0,
      totalinusefour: 0,
      totalinusetwo: 0,
      totalparking: 0,
      totaltwowheeler: 0}

   ngOnInit():void
   {
    this.adminservices.GetAdminDashboardS().subscribe(
        data => {
          this.admindashboard = data; 
          console.log(this.admindashboard)
        },
        error => {console.log(error)})
   }
   getdashboard()
   {
    this.router.navigate(['admin/dashboard'])
   }
   getsearchvehical()
   {
    this.router.navigate(['admin/searchvehicle'])
   }
   getmanageaccount()
   {
    this.router.navigate(['admin/manageaccount'])
   }
   getcompanyinfo()
   {
    this.router.navigate(['admin/companyinfo'])
   }
   
}
