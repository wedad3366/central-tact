import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   

    var options = {
      strings: ['WHO WE ARE ? <br> Contact With Us'],
      typeSpeed: 50
    };
    
    var typed = new Typed('.element2', options);
  }

}
