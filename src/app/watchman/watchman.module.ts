import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WatchmanRoutingModule } from './watchman-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { ViwebookingComponent } from './viwebooking/viwebooking.component';
import { ChargesComponent } from './charges/charges.component';
import { PrintslipComponent } from './printslip/printslip.component';
import { SidenavComponent1 } from './sidenav/sidenav.component';
import { WatchmanheaderComponent } from './watchmanheader/watchmanheader.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddbookingComponent,
    ViwebookingComponent,
    ChargesComponent,
    PrintslipComponent,
    SidenavComponent1,
    WatchmanheaderComponent
  ],
  imports: [
    CommonModule,
    WatchmanRoutingModule,
    FormsModule
  ],
  exports:[
    SidenavComponent1,
  ]
})
export class WatchmanModule { }
