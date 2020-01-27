import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserserviceService } from '../userservice.service';
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usersubservice',
  templateUrl: './usersubservice.component.html',
  styleUrls: ['./usersubservice.component.css']
})
export class UsersubserviceComponent implements OnInit {
  services: Object;
  count: number;
  sees: any;
  issue: any;
  //date: Date;
  
  constructor(private router:Router, private adminServive : AdminService, private userservice: UserserviceService,) 
  { 
    this.sees=sessionStorage['sid'];
    this.count = 0;
    this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }
  }

  cart()
  {
    this.router.navigate(['/viewcart']);
  }

  selectService(id,amt)
  {
   // alert( "subservice  Id "+id);
    // let SubSerId = id;
    let Userid= sessionStorage['userid']
   // alert(Userid +"and"+ id );
  
    let allData = {
          "service":{"id":id},
          "serviceAmount":amt,
          "user":{"id":sessionStorage['userid']},
        }
console.log(allData);

    this.userservice.bookService(allData).subscribe((res)=>{
      console.log(res);
    })
  }

  deselectService(id)
  {
    this.userservice.deleteBooking(id).subscribe((res)=>
    {
      console.log("booking deleted");
      this.router.navigate(['/usersubservice']);
    })
  }

  

  ngOnInit() 
  {
    let x = sessionStorage['mainserviceid'];
   // alert("inSubServices-main service id is "+x);


    this.adminServive.getSubServices(x).subscribe((res)=>{
    console.log(res);
    this.services = res;
    })
  }

}
