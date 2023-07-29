import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{

    let x = $("header").offset().top;
      $(window).scroll(function(){
  
        let y= $(window).scrollTop();
        if(y > x)
        {
          $("header").css("top" , "0%"); 
        }
        else{
          $("header").css("top" , "6%");
        }
      }
      )
  
      $(window).resize(function(){
        let oldwindow=$(window).width()
        if(oldwindow<=1000)
        {
          $(".smallnav").css("display" , "none");
          $("header").css("top" , "0%");
          $("header").css("background-color" , "rgb(255, 245, 238)")

          let x = $("header").offset().top;
          $(window).scroll(function(){
      
            let y= $(window).scrollTop();
            if(y > x)
            {
              $("header").css("top" , "0%"); 
            }
            else if (y<x){
              $("header").css("top" , "0%");
            }
          }
          )

        }
        else{
          $(".smallnav").css("display" , "block");
          $("header").css("top" , "6%");
          $("header").css("background-color" , "whitesmoke")

          let x = $("header").offset().top;
          $(window).scroll(function(){
      
            let y= $(window).scrollTop();
            if(y > x)
            {
              $("header").css("top" , "0%"); 
            }
            else{
              $("header").css("top" , "6%");
            }
          }
          )
        }
      })
     
  
  }



}
