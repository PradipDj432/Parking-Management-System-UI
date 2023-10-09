import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-routing.module';
import { DashboardcompanyComponent } from './dashboardcompany/dashboardcompany.component';
import { EditprofilecompanyComponent } from './editprofilecompany/editprofilecompany.component';
import { ReportcompanyComponent } from './reportcompany/reportcompany.component';
import { HeadercompanyComponent } from './headercompany/headercompany.component';
import { SidenavcompanyComponent } from './sidenavcompany/sidenavcompany.component';


@NgModule({
  declarations: [
    DashboardcompanyComponent,
    EditprofilecompanyComponent,
    ReportcompanyComponent,
    HeadercompanyComponent,
    SidenavcompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ],
  exports:[
    SidenavcompanyComponent
  ]
})
export class CompanyModule { }
