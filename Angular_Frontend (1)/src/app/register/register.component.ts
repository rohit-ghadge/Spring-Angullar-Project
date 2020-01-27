import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserserviceService,
    private router:Router
  ) { }

register(myForm){

  let data = myForm.form.value;
  //alert(data);
  let test = {
    "email":data.email,
    "name":data.name,
    "role":data.role,
    "mobile":data.mobile,
      "userloc":{
        "city":data.city,
    "state":data.state,
    "pincode":data.pincode},
      "otp": "0",
    "mainMemShipId":"0"}
  
  this.userservice.register(test).subscribe((res)=>{
  this.router.navigate(['login']);


  
  },(error)=>{
    alert("already registered use your email and password to login!!");
    this.router.navigate(['login']);
  }

)
}

ngOnInit() {
}

}
