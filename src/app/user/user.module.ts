import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UsersidenavComponent } from './usersidenav/usersidenav.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViwebookingComponent } from './viwebooking/viwebooking.component';
import { Booking1Component } from './booking1/booking1.component';
import { Booking2Component } from './booking2/booking2.component';


@NgModule({
  declarations: [
    DashboarduserComponent,
    UserheaderComponent,
    UsersidenavComponent,
    EditprofileComponent,
    ViwebookingComponent,
    Booking1Component,
    Booking2Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports:[
    UsersidenavComponent
  ]
})
export class UserModule { }
