import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { EmtrService} from '../emtr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  constructor(private userservice:UserserviceService,
    private router:Router,private emService:EmtrService) { }

    login(loginForm)
  {
  //  alert("in login......");
    let data = loginForm.form.value;
    let loginData = {
      "email": data.mail,
      "otp": data.otp}
    
   this.userservice.login(loginData).subscribe(res=>{
     console.log(res);

     if(res['role'] == "ADMIN")
     {
      sessionStorage['email']=res['email'];
      sessionStorage['userid']=res['id'];
      this.emService.logInBtnSwitch(true);
      this.router.navigate(['admin']);
     }
     if(res['role'] == "WORKER")
     {
      sessionStorage['email']=res['email'];
      sessionStorage['userid']=res['id'];
      this.emService.logInBtnSwitch(true);
      this.router.navigate(['/worker']);  
     }
     if(res['role'] == "CUSTOMER")
    {
      sessionStorage['email']=res['email'];
      sessionStorage['userid']=res['id'];
      this.emService.logInBtnSwitch(true);
      this.router.navigate(['userservices']);
    }   

   },(err)=>{
    alert("Wrong Email or OTP");
   })
  }

  generateOTP(event){
   this.email= event.target.value;
   alert("OTP generated");

   this.userservice.isEmailExist(this.email).subscribe((res)=>{
    this.router.navigate(['login']);

    },(error)=>{}
  
  )
  }

  ngOnInit() {
  }

}
