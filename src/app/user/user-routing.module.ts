import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { Booking1Component } from './booking1/booking1.component';
import { Booking2Component } from './booking2/booking2.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViwebookingComponent } from './viwebooking/viwebooking.component';
import { AuthguardGuard } from '../guard/authguard.guard';

const routes: Routes = [
  {path:'user/dashboard',component:DashboarduserComponent,canActivate:[AuthguardGuard]},
  {path:'user/editprofile',component:EditprofileComponent,canActivate:[AuthguardGuard]},
  {path:'user/viwebooking',component:ViwebookingComponent,canActivate:[AuthguardGuard]},
  {path:'user/booking',component:Booking1Component,canActivate:[AuthguardGuard]},
  {path:'user/bookingconfirm',component:Booking2Component,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
