import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managesubservice',
  templateUrl: './managesubservice.component.html',
  styleUrls: ['./managesubservice.component.css']
})
export class ManagesubserviceComponent implements OnInit {
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
