import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listuserforadmin',
  templateUrl: './listuserforadmin.component.html',
  styleUrls: ['./listuserforadmin.component.css']
})
export class ListuserforadminComponent implements OnInit {
users:any;
  issue: any;
  constructor(private adminServive : AdminService, private router:Router) {
    this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }
   }

  ngOnInit() 
  {
    this.adminServive.getUser().subscribe((res)=>{
      console.log(res);
      this.users=res;
    })
  }

}
