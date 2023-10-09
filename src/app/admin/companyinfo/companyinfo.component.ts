import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent {
  constructor(private router:Router){}
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
