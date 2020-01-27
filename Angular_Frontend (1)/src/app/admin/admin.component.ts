import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sid;
  services;
  issue: any;
  email;

  constructor(private router:Router, private adminServive : AdminService,private route:ActivatedRoute) 
  { 
    this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }

    this.email=sessionStorage.getItem('email')

  }

  deleteService(id)
  {
    console.log(id);
    this.adminServive.deleteService(id).subscribe((res)=>{
    this.ngOnInit();
    }
    )
  }

  manageServices(id)
  {
   // alert("main service id "+id);
    sessionStorage['sid']=id;
    // this.router.navigate(["/subservice",{'id':id}]);
     this.router.navigate(["/subservice"])
  }

  ngOnInit() {
    let services = this.adminServive.getService();
    this.adminServive.getService().subscribe((res)=>{
    console.log(res);
    this.services = res;
    }
    )
  }

}
