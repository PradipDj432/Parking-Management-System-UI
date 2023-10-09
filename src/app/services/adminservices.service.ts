import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  constructor(private http :HttpClient) { }
  passdata:string="";
  baseurl : string ='https://localhost:7067';
  SetDataAdminS(obj1:string)
  {
    this.passdata = obj1
  }
  GetDataAdminS()
  {
    return this.passdata
  }

  GetAdminDashboardS():Observable<any>
  {
    return this.http.get<any>(this.baseurl+"/api/Admin/dashboard")
  }
}
