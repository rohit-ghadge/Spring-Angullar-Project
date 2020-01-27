import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addsubservices',
  templateUrl: './addsubservices.component.html',
  styleUrls: ['./addsubservices.component.css']
})
export class AddsubservicesComponent implements OnInit {
  sees: any;
  issue: any;

  constructor(private adminservice :AdminService,private router:Router,private route : ActivatedRoute) 
  {
    this.sees=sessionStorage['sid'];
    this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }
   }

  ngOnInit() {
  }

  addnewsubservices(myForm)
  {
    let x= this.route.snapshot.paramMap.get('id');
    console.log(x);
    let data= myForm.form.value;
    console.log(data);
    let newdata = {
      "amount":data.amount,
      "serviceDesc":data.subServiceDesc,
      "subServiceName":data.subServiceName,
      "mainService":{"id":data.sid}
    }
      
    console.log(newdata);
    console.log(x);
    this.adminservice.addSubService(newdata).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['subservice']);
    },(error)=>{console.log("addition failed ");}
    )
  }

}
