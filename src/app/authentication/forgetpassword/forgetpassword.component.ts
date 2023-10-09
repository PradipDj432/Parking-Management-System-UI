import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  forgetoptions=['User','Company']
  constructor(private router:Router){}
  otpsent:string=""
  status=false
  
  setforgetpass(forgetvalue:any)
  {
     this.otpsent="OTP Sent Successfully !!!!"
     console.warn(forgetvalue);
     this.status=true
  }
  Backtologinpage()
  {
    this.router.navigate(["authentication/login"]);
  }

  otpstatus=false
  validotp=""
  verifyotp(otpvalue:any)
  {
    // console.warn(otpvalue);
    
    if(otpvalue.otp==123456)
    {
      this.otpstatus=true
      this.validotp="Your OTP Verify Successfully!! "
    }
    else
    {
      this.validotp="Re-Enter Valid OTP or Re-Sent OTP"
    }
  }
  resentopt()
  {
     this.validotp="Re-Sent OTP On Your MailID"
  }


  passchange=""
  setpassword(pass:any)
  {
    // console.warn(pass);
    
    if(pass.password==pass.repassword)
    {
      this.passchange="Password Change Successfully !!!!"
    }
    else
    {
      this.passchange="Password Do Not Match"
    }
  }
  
}
