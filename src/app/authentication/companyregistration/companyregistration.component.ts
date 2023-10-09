import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companyregistration',
  templateUrl: './companyregistration.component.html',
  styleUrls: ['./companyregistration.component.css']
})
export class CompanyregistrationComponent {
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
      this.validpass="Company Registration Successfully Complete!!"
    }
  }
  backtologin()
  {
    this.router.navigate(["authentication/login"])
  }
}
