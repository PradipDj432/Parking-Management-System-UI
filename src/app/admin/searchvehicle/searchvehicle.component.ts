import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchvehicle',
  templateUrl: './searchvehicle.component.html',
  styleUrls: ['./searchvehicle.component.css']
})
export class SearchvehicleComponent {
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
