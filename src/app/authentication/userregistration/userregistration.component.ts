import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  constructor(private router:Router){}

  validpass=""
  getregistration(userregiform:any)
  {
    console.warn(userregiform);
    if(userregiform.password!=userregiform.repassword)
    {
      this.validpass="Password and Re-Password Do Not Match"
    }
    else
    {
      this.validpass="Your Registration Successfully Complete!!"
    }
  }
  backtologin()
  {
    this.router.navigate(["authentication/login"])
  }
}
