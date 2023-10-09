import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viwemore',
  templateUrl: './viwemore.component.html',
  styleUrls: ['./viwemore.component.css']
})
export class ViwemoreComponent {
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
