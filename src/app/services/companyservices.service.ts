import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyEdit } from '../models/companyedit.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyservicesService {
  baseurl : string ='https://localhost:7067';
  constructor( private http: HttpClient) { }
  GetCompanyDashBoardS(obj : string): Observable<any>
  {
    return this.http.get<any>(this.baseurl+"/api/Company/dashboard/"+obj)
  }
  GetCompanyProfileS(obj : string) : Observable<CompanyEdit>
  {
    return this.http.get<CompanyEdit>(this.baseurl+"/api/Company/profile/"+obj)
  }
  GetCompanyEditProfileS(obj : string, cobj : CompanyEdit) : Observable<CompanyEdit>
  {
    return this.http.put<any>(this.baseurl+"/api/Company/editprofile/"+obj,cobj)
  }

  passdata:string="";
  SetDataCompanyS(obj1:string)
  {
    this.passdata = obj1
  }
  GetDataCompanyS()
  {
    return this.passdata
  }

  reportdata:any;
  SetReportDataS(obj:any)
  {
    this.reportdata = obj 
  }
  GetReportDataS()
  {
    return this.reportdata;
  }
}
