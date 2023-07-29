import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['WHO WE ARE ? <br> Join <br> Our Team'],
      typeSpeed: 50
    };
    
    var typed = new Typed('.element2', options);
  }

}
