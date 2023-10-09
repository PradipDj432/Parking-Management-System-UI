import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersidenavComponent } from '../usersidenav/usersidenav.component';
import { UserservicesService } from 'src/app/services/userservices.service';
import { CompanyCard } from 'src/app/models/copmanycard.model';
import { PreBookCard } from 'src/app/models/prebookcard.model';
import { CommonservicesService } from 'src/app/services/commonservices.service';
import { WatchmanservicesService } from 'src/app/services/watchmanservices.service';
@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent {
  prebookcard : PreBookCard[] = []
  allcompany : CompanyCard[] = []
  searchcompany : CompanyCard[] = []
  useremail : any;

  constructor(private router: Router, 
              private userservice : UserservicesService,
              private commonservice : CommonservicesService,
              private watchmanservice: WatchmanservicesService){}


  ngOnInit(): void 
  {
    // Get prebook card
    this.useremail = sessionStorage.getItem("username")
    this.userservice.GetPreBookSlotsS(this.useremail).
    subscribe(data => {this.prebookcard = data; 
                       this.userservice.SetPrebookCardArrayS(data)})
    // Get All company
    this.userservice.GetAllCompanyS().
    subscribe(data => {this.allcompany = data; console.log(this.allcompany)})
  }
  getsearchcompanyTS(searchcompany : string)
  {
      this.userservice.GetSearchCompanyS(searchcompany).
      subscribe(data => {this.searchcompany = data; console.log(this.searchcompany)})
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
  navigateTobooking1(companyData: { email: string, name: string}) {
    const companyDataUserEmail = {
      email: companyData.email,
      name: companyData.name,
      useremail1: this.useremail
    }; 
    this.commonservice.SetDataS(companyDataUserEmail);
    this.router.navigate(['user/booking']);
  }  

  
}
