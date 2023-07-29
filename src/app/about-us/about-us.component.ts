import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['We Have The Best Experts To <br> Elevate Your Business'],
      typeSpeed: 50
    };
    
    var typed = new Typed('.element2', options);

    var options = {
      strings: ['Check Out Our Work Process!'],
      typeSpeed: 50
    };
    
    var typed = new Typed('.element', options);

    var options = {
      strings: ['Have A Any Questions?'],
      typeSpeed: 50
    };
    
    var typed = new Typed('.element3', options);
  }

}
