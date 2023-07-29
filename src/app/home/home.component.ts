import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { NgwWowService } from 'ngx-wow';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(@Inject(NgwWowService) private wowService:NgwWowService) { 
    this.wowService.init(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       300,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
      }
    );
  }

  ngOnInit(): void {
    var options = {
      strings: ['Explore Our CallCenter And Consulting Features'],
      typeSpeed: 50
    };
    
    var typed = new Typed('.element', options);

  }
 

}
