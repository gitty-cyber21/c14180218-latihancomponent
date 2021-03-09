import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {


  constructor( private router : Router, public globalvar : GlobalvarService) { }
   
   

  FAV(){
    
    for(var i = 0; i < this.globalvar.arr.length; i++){
      
      if(this.globalvar.fav == 0){
        this.globalvar.fav = 1;
      }
    }

    if(this.globalvar.fav == 1){
      this.globalvar.favarr.push(this.globalvar.arr[this.globalvar.fav]);
    }
  }

  FAV2(){

  }

  BACK(){
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}