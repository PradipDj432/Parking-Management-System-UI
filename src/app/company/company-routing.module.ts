import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcompanyComponent } from './dashboardcompany/dashboardcompany.component';
import { EditprofilecompanyComponent } from './editprofilecompany/editprofilecompany.component';
import { ReportcompanyComponent } from './reportcompany/reportcompany.component';
import { AuthguardGuard } from '../guard/authguard.guard';

const routes: Routes = [
  {path:"company/dashboard",component:DashboardcompanyComponent,canActivate:[AuthguardGuard]},
  {path:"company/report",component:ReportcompanyComponent,canActivate:[AuthguardGuard]},
  {path:"company/editprofile",component:EditprofilecompanyComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
