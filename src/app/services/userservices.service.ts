import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PreBookCard } from '../models/prebookcard.model';
import { CompanyCard } from '../models/copmanycard.model';
import { AddBooking } from '../models/addbooking.model';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http:HttpClient) { }
  baseurl : string ='https://localhost:7067';
  GetPreBookSlotsS(useremail : string): Observable<PreBookCard[]>
  {
    console.log(useremail)
    return this.http.get<PreBookCard[]>(this.baseurl+'/api/UserDashboard/prebook/'+useremail);
  }
  
  GetAllCompanyS():Observable<CompanyCard[]>
  {
    console.log("all company works")
    return this.http.get<CompanyCard[]>(this.baseurl+'/api/UserDashboard/allcompany')
  }

  GetSearchCompanyS(companyname:string):Observable<CompanyCard[]>
  {
    console.log("Search company is works")
    return this.http.get<CompanyCard[]>(this.baseurl+'/api/UserDashboard/searchcompany/'+companyname)
  }

  GetInUseSpotS(timeinfo:AddBooking):Observable<number[]>
  {
    console.log("In use Slots is works")
    return this.http.post<number[]>(this.baseurl+'/api/UserDashboard/searchslot',timeinfo)
  }

  GetTotalParkingForAvailableS(timeinfo:AddBooking):Observable<number>
  {
    console.log("total parking is works")
    return this.http.post<number>(this.baseurl+'/api/UserDashboard/totalparking',timeinfo)
  }

  GetAddBookingS(obj : AddBooking) :Observable<number>
  {
    console.warn(obj)
    console.log("add booing is work")
    return this.http.post<number>(this.baseurl+'/api/UserDashboard/addbooking',obj)
  }
  
  prebookcardarray: PreBookCard[] = []

  SetPrebookCardArrayS(obj:any)
  {
    this.prebookcardarray= obj;
  }
  GetPrebookCardArrayA()
  {
    return this.prebookcardarray;
  }
  
}
