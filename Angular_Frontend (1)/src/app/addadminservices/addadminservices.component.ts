import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadminservices',
  templateUrl: './addadminservices.component.html',
  styleUrls: ['./addadminservices.component.css']
})
export class AddadminservicesComponent implements OnInit {
  data: any;
  issue: any;

  constructor(private adminservice :AdminService,
    private router:Router) {
      this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }
     }

  addnewservices(myForm)
  {
    let data = myForm.form.value;
    let serve = {"serviceName" : data.newmainservices,           
                }
    console.log(serve);
    this.adminservice.addService(serve).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['admin']);

      },(error)=>{console.log("addition failed ");}
      
    )
    }

  ngOnInit() {
  }

}
