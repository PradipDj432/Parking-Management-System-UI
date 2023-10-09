import { Component,OnInit,NgModule,ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { forkJoin } from 'rxjs';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { UserservicesService } from 'src/app/services/userservices.service';
import { CompanyservicesService } from 'src/app/services/companyservices.service';
import { WatchmanservicesService } from 'src/app/services/watchmanservices.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  options = ['User', 'Watchman', 'Company','Admin'];
  selectedOption:string='User'; 
  regioptions = ['Select Role','User','Company'];
  status=false
  valid:string=''
  responce : {success:boolean,message:string} = {success:true,message:""}
  constructor(private router: Router, 
              private authservices : AuthservicesService,
              private adminservices : AdminservicesService,
              private userservices : UserservicesService,
              private companyservices : CompanyservicesService,
              private watchmanservices : WatchmanservicesService){}
  v : any
  printSelectedOption(so: any) {
    console.warn(so);
    
    forkJoin(
    this.authservices.GetLoginValidateS(so))
    .subscribe((data)=>{
      console.log(data);
      
      // console.log(this.v.value);
    if(data[0].success==true)
    {
    this.selectedOption=so.role;
    sessionStorage.setItem('username', so.email);
    sessionStorage.setItem('password', so.password);
    sessionStorage.setItem('token', so.email+"@"+so.password);
    // this.shared.setMessage(this.selectedOption);
      if(this.selectedOption=='User')
      {
        this.router.navigate(['user/dashboard']);
      }
      else if(this.selectedOption=='Admin')
      {
        this.adminservices.SetDataAdminS(so.email);
        this.router.navigate(['admin/dashboard'])
      }
      else if(this.selectedOption=='Company')
      {
        this.companyservices.SetDataCompanyS(so.email);
        this.router.navigate(['company/dashboard'])
      }
      else if(this.selectedOption=='Watchman')
      {
        sessionStorage.setItem('companyemail', data[0].message);
        this.watchmanservices.SetDataWatchmanS(so.email);
        this.router.navigate(['watchman/dashboard'])
      }
    }
    else
    {
        this.valid="Enter valid username and password";
    }
  }
  )
  }
  getregistration()
  {
    this.status=true
  }
  setregistration(type:string)
  {
    console.warn(type);
    
     if(type=='Company')
     {
      this.router.navigate(['/companyregistration']);
     }
     else if(type=='User'){
      this.router.navigate(['/userregistration']);
     }
  }
  getpassword()
  {
    this.router.navigate(['/forgetpassword'])
  }
  

}
// next : (data) =>
//       {
//         v=data
//         console.log(data);
//       },
//       error: (response) => {
//         console.log(response);
//       }