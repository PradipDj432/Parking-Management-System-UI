import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreBookCard } from 'src/app/models/prebookcard.model';
import { UserservicesService } from 'src/app/services/userservices.service';
import { WatchmanservicesService } from 'src/app/services/watchmanservices.service';

@Component({
  selector: 'app-viwebooking',
  templateUrl: './viwebooking.component.html',
  styleUrls: ['./viwebooking.component.css']
})
export class ViwebookingComponent {
  prebookcard: PreBookCard[] = []
  constructor(private router: Router,
    private watchmanservice: WatchmanservicesService,
    private userservice: UserservicesService) { }

  ngOnInit() {
    this.prebookcard = this.userservice.GetPrebookCardArrayA();
  }
  GetCancelSlot(bookingId: string) {
    this.watchmanservice.GetParkingStatusChangeS(Number(bookingId), 3).subscribe
      (data => {
        console.log(data)
        if (data == 1) alert("Your Booking Slot is Cancel")
        for (let i = 0; i < this.prebookcard.length; i++) {
          if (this.prebookcard[i].bookingid == bookingId){
            this.prebookcard.splice(i, 1)
          }
  }
      })
  }
  getdashboard() {
    this.router.navigate(['user/dashboard'])
  }
  getviwebooking() {
    this.router.navigate(['user/viwebooking'])
  }
  geteditprofile() {
    this.router.navigate(['user/editprofile'])
  }
}
