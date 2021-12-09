import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {fader, slider//, transformer, stepper
} from '../../route-animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    slider
  ]
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  
  ngOnInit(): void {
    

  }
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
