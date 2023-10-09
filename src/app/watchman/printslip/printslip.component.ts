import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrintSlipCard } from 'src/app/models/printslipcard.model';
import { WatchmanservicesService } from 'src/app/services/watchmanservices.service';

@Component({
  selector: 'app-printslip',
  templateUrl: './printslip.component.html',
  styleUrls: ['./printslip.component.css']
})
export class PrintslipComponent {
  companyemail:any
  objviwebooking:PrintSlipCard[] = []
  constructor(private router:Router, private watchmanservices : WatchmanservicesService){}
  ngOnInit(): void 
  {
    this.companyemail = sessionStorage.getItem('companyemail')
   this.GetViewBookingData();
  }
  GetViewBookingData(){
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


   SearchBookingIdTS(obj : string){
     for (let index = 0; index < this.objviwebooking.length; index++) {
      if(this.objviwebooking[index].bookingid==obj)
      {
       this.objprintinfo=this.objviwebooking[index]
      }
      this.objslipstatus=true
     }
   }

   parkingstatus:number=0
   GoIntoLive(obj: { bookingid: string }){
    this.watchmanservices.GetParkingStatusChangeS(Number(obj.bookingid),1).subscribe(data => {
      this.parkingstatus = data; 
      this.GetViewBookingData();
      this.objslipstatus=false
    })
    // window.location.reload();
   }
   objprintinfo:PrintSlipCard={
                  username:"",
                  slotno:0,
                  entrytime:"",
                  exittime:"",
                  bookingid:"",
                  vehicletype:0,
                  vehicleplate:"",
                  parkingstatus:0,
                  contactno:""
                 }
   objslipstatus = false
   parkingcharge:number = 0
   GoToPrintSlipS(obj: { obj1: any})
   {
    this.watchmanservices.GetParkingChargeS(Number(obj.obj1.bookingid)).
    subscribe(data => {this.parkingcharge = data ; console.log(this.parkingcharge)})
    this.objprintinfo = obj.obj1
    this.objslipstatus = true
   }

   HidePrintSlipBox()
   {
    this.objslipstatus=false
   }
}
