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
   
   

  FAV(j){
    this.globalvar.favarr.push(this.globalvar.arr[j]);
  }

  FAV2(){

  }

  BACK(){
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}