import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { CompanyregistrationComponent } from './companyregistration/companyregistration.component';
import { AdminModule } from '../admin/admin.module';
import { CompanyModule } from '../company/company.module';
import { WatchmanModule } from '../watchman/watchman.module';
import { UserModule } from '../user/user.module';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { SharedService } from '../shared/shared.service';
@NgModule({
  declarations: [
    LoginComponent,
    UserregistrationComponent,
    CompanyregistrationComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AdminModule,
    CompanyModule,
    WatchmanModule,
    UserModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ],
  // providers: [
  //   SharedService // add SharedService here
  // ]
})
export class AuthenticationModule { }
