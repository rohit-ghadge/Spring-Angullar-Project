import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectservice',
  templateUrl: './selectservice.component.html',
  styleUrls: ['./selectservice.component.css']
})
export class SelectserviceComponent implements OnInit {
  issue: any;

  constructor(private router: Router) 
  {
    
    
  }

  ngOnInit() {
  }

}
