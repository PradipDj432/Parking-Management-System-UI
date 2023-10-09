import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(private http : HttpClient) { }
  baseurl : string ='https://localhost:7067';
  GetLoginValidateS(obj : any) : Observable<{ success: boolean; message: string; }>
  {
    return this.http.post<{ success: boolean; message: string; }>(this.baseurl+"/api/Authentication/Login",obj);
  }
}
