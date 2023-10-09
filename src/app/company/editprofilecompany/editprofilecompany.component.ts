import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyEdit } from 'src/app/models/companyedit.model';
import { CompanyservicesService } from 'src/app/services/companyservices.service';

@Component({
  selector: 'app-editprofilecompany',
  templateUrl: './editprofilecompany.component.html',
  styleUrls: ['./editprofilecompany.component.css']
})
export class EditprofilecompanyComponent {
    constructor(private router:Router,
      private route: ActivatedRoute,
      private companyservice: CompanyservicesService,
      private Route: ActivatedRoute,
  ){}
  
  email:string=""
  
  
  companyDetails: CompanyEdit = {
    company_email_id: '',
    company_password: '',
    company_name: '',
    company_address: '',
    total_parking: 0,
    two_wheel_parking: 0,
    four_wheel_parking: 0,
    two_wheel_charge: 0,
    four_wheel_charge: 0,
    two_wheel_penalty:0,
    four_wheel_penalty: 0,
    company_contact_no: 0,
    watchman_emailid : '',
    watchman_password : ''
  }
  
  
  ngOnInit(): void {
    // debugger
    this.email=this.companyservice.GetDataCompanyS();
    // console.log(this.email)
    this.companyservice.GetCompanyProfileS(this.email).subscribe({
      next: (response) => {
        this.companyDetails = response;
        // console.log(response);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  
  
    updateCompanyDetails(){
      console.log(this.companyDetails);
      this.companyservice.GetCompanyEditProfileS(this.companyDetails.company_email_id, this.companyDetails)
      .subscribe({
        next : (data) =>
        {
          console.log(data);
        },
        error: (response) => {
          console.log(response);
        }
      })
    }
  
  
   getdashboard()
   {
    this.router.navigate(['company/dashboard'])
   }
   getreports()
   {
    this.router.navigate(['company/report'])
   }
   geteditprofile()
   {
    this.router.navigate(['company/editprofile'])
   }
}
