import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { SearchvehicleComponent } from './searchvehicle/searchvehicle.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { ViwemoreComponent } from './viwemore/viwemore.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageaccountComponent,
    SearchvehicleComponent,
    CompanyinfoComponent,
    SidenavComponent,
    AdminheaderComponent,
    ViwemoreComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    SidenavComponent,
  ]
})
export class AdminModule { }
