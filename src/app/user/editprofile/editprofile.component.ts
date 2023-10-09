import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  constructor(private router: Router){}
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
}
