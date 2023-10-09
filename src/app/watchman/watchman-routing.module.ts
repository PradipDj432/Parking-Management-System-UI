import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { ChargesComponent } from './charges/charges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrintslipComponent } from './printslip/printslip.component';
import { ViwebookingComponent } from './viwebooking/viwebooking.component';
import { AuthguardGuard } from '../guard/authguard.guard';

const routes: Routes = [
  {path:'watchman/dashboard',component:DashboardComponent,canActivate:[AuthguardGuard]},
  {path:'watchman/addbooking',component:AddbookingComponent,canActivate:[AuthguardGuard]},
  {path:'watchman/viwebooking',component:ViwebookingComponent,canActivate:[AuthguardGuard]},
  {path:'watchman/charges',component:ChargesComponent,canActivate:[AuthguardGuard]},
  {path:'watchman/printslip',component:PrintslipComponent,canActivate:[AuthguardGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchmanRoutingModule { }
