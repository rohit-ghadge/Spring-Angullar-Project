import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userservices',
  templateUrl: './userservices.component.html',
  styleUrls: ['./userservices.component.css']
})
export class UserservicesComponent implements OnInit {
  services: Object;
  issue: any;
  email:any;

  constructor(private router:Router, private adminServive : AdminService) 
  { 
    this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }
    this.email=sessionStorage.getItem('email')
  }

  getSubServices(id)
  {
    //alert(id);
   // console.log(id);
   sessionStorage['mainserviceid']=id;
   // this.router.navigate(["/subservice",{'id':id}]);
   this.router.navigate(["/usersubservice"]);
  }

  ngOnInit() 
  {
    this.adminServive.getService().subscribe((res)=>{
    console.log(res);
    this.services = res;
    })
  
  }

}
