import { Component,OnInit,NgModule,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonservicesService } from 'src/app/services/commonservices.service';
import { UserservicesService } from 'src/app/services/userservices.service';

import { forkJoin } from 'rxjs';
import { AddBooking } from 'src/app/models/addbooking.model';

@Component({
  selector: 'app-booking1',
  templateUrl: './booking1.component.html',
  styleUrls: ['./booking1.component.css']
})

export class Booking1Component {
  companyname:string=""
  companyemail:string=""
  useremail:string=""
  companyobj : any
  constructor(private router: Router, 
              private commonservice : CommonservicesService,
              private userservice : UserservicesService){}

  ngOnInit(): void 
  {
    this.companyobj = this.commonservice.GetDataS();
    this.companyname = this.companyobj.name
    this.companyemail = this.companyobj.email
    this.useremail = this.companyobj.useremail1
    console.log(this.companyemail)
  }

  getdashboard()
  {
    this.router.navigate(['user/dashboard'])
  }
  getviwebooking()
  {
    this.router.navigate(['user/viwebooking'])
  }
  geteditprofile()
  {
    this.router.navigate(['user/editprofile'])
  }

  addbooking : AddBooking =
  {
    company_emailid:"",
    user_emailid:"",
    vehicle_plate:"",
    parking_spot_no:0,
    entrytime:"",
    exittime:"",
    vehicle_type:true
  }



  getselectedspot(obj: { spotno: number }) {
    console.log(obj.spotno);
    
    
    this.addbooking.parking_spot_no = obj.spotno
    this.commonservice.SetDataS(this.addbooking);

    this.router.navigate(['user/bookingconfirm'])
  }

  inusespots:number[]  = []
  avariblespots:number[]  = []
  totalparking:number = 0
  status = false


  
  timevalidation= ""
  timevalidationstatus=false
  bookinginfo(timeobj:any)
  {
    // const currentTime = new Date();
    // const entrytimeFormmate = new Date(`2000-01-01T${timeobj.entrytime}:00`);
    // const exittimeFormmate = new Date(`2000-01-01T${timeobj.exittime}:00`);
    // console.log(timeobj.entrydatetime)
    // console.log(timeobj.exitdatetime)
    // console.log(currentTime.getTime())
    // console.log(entrytimeFormmate.getTime())
    // console.log(exittimeFormmate.getTime())
    // console.log(currentTime)
    // console.log(entrytimeFormmate)
    // console.log(exittimeFormmate)
    // if((entrytimeFormmate.getTime() < currentTime.getTime() || 
    //     exittimeFormmate.getTime() < currentTime.getTime() || 
    //     entrytimeFormmate.getTime() > exittimeFormmate.getTime() ))
    //     {
    //       this.timevalidation = "Enter Valid time"
    //     }
    // else { this.timevalidationstatus = true}


    // if(this.timevalidationstatus)
    // {
    this.status = true
    let entryTime = timeobj.entrytime;
    let exitTime = timeobj.exittime;

    let entryHour = parseInt(entryTime.split(":")[0]);
    let exitHour = parseInt(exitTime.split(":")[0]);
    let entryMin = parseInt(entryTime.split(":")[1]);
    let exitMin = parseInt(exitTime.split(":")[1]);

    if (entryTime.includes("PM") && entryHour !== 12) {
      entryHour += 12;
    }

    if (exitTime.includes("PM") && exitHour !== 12) {
      exitHour += 12;
    }
    
    
    
    
    let entryTime24 = entryHour.toString().padStart(2, "0") + ":" + entryTime.split(":")[1].replace(" ", "");
    let exitTime24 = exitHour.toString().padStart(2, "0") + ":" + exitTime.split(":")[1].replace(" ", "");
    
    this.addbooking.company_emailid = this.companyemail
    this.addbooking.entrytime = entryTime24
    this.addbooking.exittime = exitTime24
    this.addbooking.user_emailid = this.useremail
    if(timeobj.vehicle=='0'){this.addbooking.vehicle_type = false}
    else{this.addbooking.vehicle_type = true}
    
    forkJoin([
      this.userservice.GetInUseSpotS(this.addbooking),
      this.userservice.GetTotalParkingForAvailableS(this.addbooking)
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
  
}
