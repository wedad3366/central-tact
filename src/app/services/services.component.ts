import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['The High Standard Trusted <br> Professional Services'],
      typeSpeed: 50
    };
    
    var typed = new Typed('.element2', options);
  }

}
