import { Component, OnInit, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  cart: any;
  
  getTotal:number=0;
  issue: any;
    constructor(private userservice: UserserviceService,private router:Router) 
  { 
    
      this.issue = sessionStorage['userid'];
      if(this.issue==undefined)
      {
        this.router.navigate(['/login'])
      }

    let x = sessionStorage['userid'];
    this.userservice.cart(x).subscribe((res)=>
    {
          console.log(res);
          this.cart=res;
          this.cart.forEach(element => {
            this.getTotal=this.getTotal + element.serviceAmount;
          });
    });
  }

  ngOnInit() {
  
  }
  
  deleteService(id)
  {
    //alert("c.id"+id);
    this.userservice.deleteBooking(id).subscribe((res)=>
    {
      console.log("booking deleted");
      this.router.navigate(['/viewcart']);
      window.location.reload();
    });
    
  }

}
