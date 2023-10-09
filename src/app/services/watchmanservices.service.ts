import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PrintSlipCard } from '../models/printslipcard.model';

@Injectable({
  providedIn: 'root'
})
export class WatchmanservicesService {

  constructor(private http:HttpClient) { }
  baseurl : string ='https://localhost:7067';

  GetViweBookingS(obj : string): Observable<PrintSlipCard[]>
  {
    return this.http.get<PrintSlipCard[]>(this.baseurl+"/api/Watchman/viwebooking/"+obj)
  }

  GetParkingStatusChangeS(bookingId: number, flag: number): Observable<number> {
    // const url = `${this.baseurl}/api/Watchman/parkingstatus/${bookingId}?flag=${flag}`;
    return this.http.get<number>(this.baseurl+"/api/Watchman/parkingstatus/"+bookingId+"/"+flag);
  }
  

  GetParkingChargeS(obj : number) : Observable<number>
  {
    return this.http.get<number>(this.baseurl+"/api/Watchman/parkingcharge/"+obj)
  }

  GetWatchmanDashBoardS(obj : string): Observable<any>
  {
    return this.http.get<any>(this.baseurl+"/api/Watchman/dashboard/"+obj)
  }

  passdata:string="";
  SetDataWatchmanS(obj1:string)
  {
    this.passdata = obj1
  }
  GetDataWatchmanS()
  {
    return this.passdata
  }
}
