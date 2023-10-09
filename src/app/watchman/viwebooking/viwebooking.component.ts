import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrintSlipCard } from 'src/app/models/printslipcard.model';
import { WatchmanservicesService } from 'src/app/services/watchmanservices.service';

@Component({
  selector: 'app-viwebooking',
  templateUrl: './viwebooking.component.html',
  styleUrls: ['./viwebooking.component.css']
})
export class ViwebookingComponent {
  companyemail:any
  objviwebooking : PrintSlipCard[] = []
  constructor(private router:Router, private watchmanservices : WatchmanservicesService){}
  ngOnInit(): void 
  {
    this.companyemail = sessionStorage.getItem('companyemail')
    this.watchmanservices.GetViweBookingS(this.companyemail).
    subscribe(data => {this.objviwebooking = data; console.log(this.objviwebooking)})
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
