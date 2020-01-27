import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.css']
})
export class SubserviceComponent implements OnInit {
sees:any;
  services: any;
  issue: any;
  constructor(public router:Router, public adminServive : AdminService,public route:ActivatedRoute) 
  {
    this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }

   }

  updateSubService(id)
  {
    //alert("sub service id"+id);
    //console.log(id);
    sessionStorage['mainid']=id;
    this.router.navigate(["/updatesubservice",{'id':id}]);
    
  }
  
  ngOnInit() 
  {
    let x = sessionStorage['sid'];
   // alert("inSubServices main Id is "+x);

  // alert("in subservices "+this.route.snapshot.paramMap.get('id'));
  // let x= this.route.snapshot.paramMap.get('id');
    this.adminServive.getSubServices(x).subscribe((res)=>{
    console.log(res);
    this.services = res;
    })
  }

  deleteSubService(id)
  {
    this.adminServive.deleteSubService(id).subscribe((res)=>{
    console.log(res);
     this.ngOnInit();

    })
  }
}
