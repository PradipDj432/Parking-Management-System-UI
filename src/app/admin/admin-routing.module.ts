import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { SearchvehicleComponent } from './searchvehicle/searchvehicle.component';
import { ViwemoreComponent } from './viwemore/viwemore.component';
import { AuthguardGuard } from '../guard/authguard.guard';

const routes: Routes = [
  {path:'admin/dashboard',component:DashboardComponent,canActivate:[AuthguardGuard]},
  {path:'admin/companyinfo',component:CompanyinfoComponent,canActivate:[AuthguardGuard]},
  {path:'admin/searchvehicle',component:SearchvehicleComponent,canActivate:[AuthguardGuard]},
  {path:'admin/manageaccount',component:ManageaccountComponent,canActivate:[AuthguardGuard]},
  {path:'admin/companyinfo/viwemore',component:ViwemoreComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
