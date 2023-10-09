import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {

  constructor() { }
  passdata:any;
  SetDataS(obj1:any)
  {
    this.passdata = obj1
  }
  GetDataS()
  {
    return this.passdata
  }
}
