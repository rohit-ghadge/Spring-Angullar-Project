import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatesubservices',
  templateUrl: './updatesubservices.component.html',
  styleUrls: ['./updatesubservices.component.css']
})
export class UpdatesubservicesComponent implements OnInit {
  servi: Object;
  no: string;
  service: Object;
  sees:any;
w:any;
  issue: any;
  constructor(private adminservice :AdminService,
    private router:Router, private route : ActivatedRoute) 
    {
      this.sees=sessionStorage['sid'];
      this.issue = sessionStorage['userid'];
      if(this.issue==undefined)
      {
        this.router.navigate(['/login'])
      }
  
     }

    updatenewsubservices(myForm)
  {
   // this.w = sessionStorage['mainsid'];
    //alert("hellooo"+this.w);
    let x= this.route.snapshot.paramMap.get('id');
    console.log(x);
    let data= myForm.form.value;
    console.log(data);
    let newdata = {
      "amount":data.amount,
      "serviceDesc":data.subServiceDesc,
      "subServiceName":data.subServiceName,
      "mainService":{"id":data.mainsid}
    }
      
    console.log(newdata);
    console.log(x);
    //console.log(y);
    this.adminservice.updateSubService(x,newdata).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['subservice']);
    },(error)=>{console.log("update failed ");}
    )
  }

  ngOnInit() 
  {
    
  }

}
