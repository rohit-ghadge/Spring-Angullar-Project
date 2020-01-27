import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentgate',
  templateUrl: './paymentgate.component.html',
  styleUrls: ['./paymentgate.component.css']
})
export class PaymentgateComponent implements OnInit {
  issue: any;

  constructor(private router: Router) { 
    this.issue = sessionStorage['userid'];
    if(this.issue==undefined)
    {
      this.router.navigate(['/login'])
    }
  }


  ngOnInit() {
  }

}
