import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddBooking } from 'src/app/models/addbooking.model';
import { CommonservicesService } from 'src/app/services/commonservices.service';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-booking2',
  templateUrl: './booking2.component.html',
  styleUrls: ['./booking2.component.css']
})
export class Booking2Component {
  
  companyname=""
  entrytime=""
  exittime=""
  vehicletype=""
  spotno=0
  done = ""

  constructor(private router: Router, 
              private commonservice : CommonservicesService,
              private userservice : UserservicesService){}

  addbookin1 : AddBooking =
              {
                company_emailid:"",
                user_emailid:"",
                vehicle_plate:"",
                parking_spot_no:0,
                entrytime:"",
                exittime:"",
                vehicle_type:true
              }  

  ngOnInit(): void 
  {
    this.addbookin1 = this.commonservice.GetDataS();
    // console.warn(this.addbookin1)
    this.companyname = this.addbookin1.company_emailid
    this.entrytime = this.addbookin1.entrytime
    this.exittime = this.addbookin1.exittime
    if(this.addbookin1.vehicle_type) this.vehicletype = "Four Wheeler"
    else this.vehicletype = "Two Wheeler"
    this.spotno = this.addbookin1.parking_spot_no
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

  flag:number=0
  bookingconfirmTS(obj:string)
  {
    this.addbookin1.vehicle_plate = obj
    // console.log(this.addbookin1)
    this.userservice.GetAddBookingS(this.addbookin1).
    subscribe(data => {this.flag = data; console.log(this.flag)})
    if(this.flag==1)
    this.done = "Your Booking is Confirm !!!!"
  }
}
