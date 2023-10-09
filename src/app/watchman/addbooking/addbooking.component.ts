import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddBooking } from 'src/app/models/addbooking.model';
import { UserservicesService } from 'src/app/services/userservices.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent {
  usertype = ['Already Account','New User']
  companyemail:any
  constructor(private router:Router, private userservice : UserservicesService){}
  ngOnInit()
  {
    this.companyemail = sessionStorage.getItem('companyemail')
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


   status = false
   setUsertypeTS(obj:string)
   {
    if(obj=='Already Account') this.status = false
    else this.status = true
   }

   getregistration(obj:any)
   {

   }

   getbookingnow()
   {
    this.status = false
   }


   totalparking:number = 0
   inUseSpots : number[] = []
   avariblespots : number[]= []

   objaddbooking : AddBooking =
   {
       company_emailid:"",
       user_emailid:"",
       vehicle_plate:"",
       parking_spot_no:0,
       entrytime:"",
       exittime:"",
       vehicle_type:true
   }

   bookinginfo(timeobj:any)
   {
    let entryTime = timeobj.entrytime;
    let exitTime = timeobj.exittime;

    let entryHour = parseInt(entryTime.split(":")[0]);
    let exitHour = parseInt(exitTime.split(":")[0]);

    if (entryTime.includes("PM") && entryHour !== 12) {
      entryHour += 12;
    }

    if (exitTime.includes("PM") && exitHour !== 12) {
      exitHour += 12;
    }

    let entryTime24 = entryHour.toString().padStart(2, "0") + ":" + entryTime.split(":")[1].replace(" ", "");
    let exitTime24 = exitHour.toString().padStart(2, "0") + ":" + exitTime.split(":")[1].replace(" ", "");

    this.objaddbooking.company_emailid = this.companyemail
    this.objaddbooking.entrytime = entryTime24
    this.objaddbooking.exittime = exitTime24
    this.objaddbooking.user_emailid = timeobj.email
    this.objaddbooking.vehicle_plate = timeobj.vehicleplate
    if(timeobj.vehicle=='0'){this.objaddbooking.vehicle_type = false}
    else{this.objaddbooking.vehicle_type = true}

    
    
    forkJoin([
      this.userservice.GetInUseSpotS(this.objaddbooking),
      this.userservice.GetTotalParkingForAvailableS(this.objaddbooking)
    ]).subscribe(
      ([inUseSpots, totalParking]) => {
        console.log(inUseSpots);
        console.log(totalParking);
        const num: number = totalParking;
        const array1: number[] = inUseSpots
        for (let i = 1; i <= num; i++) {
          if (!array1.includes(i)) {
            this.avariblespots.push(i);
          }
        }
        console.log(this.avariblespots);
      }
    );
   }

   flag:number = 0
   done:string=""
   getselectedspot(obj: { spotno: number }) {
    console.log(obj.spotno);
    this.objaddbooking.parking_spot_no = obj.spotno
    this.userservice.GetAddBookingS(this.objaddbooking).
    subscribe(data => {this.flag = data; console.log(this.flag)})
    console.log(this.flag)
    this.done = "Your Slot is Book Now !!"
   }
}
