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

    for(var i = 0; i < this.globalvar.arr.length; i++){
        for(var x = 0; x < this.globalvar.favarr.length; x++){
          if(this.globalvar.arr[i] == this.globalvar.favarr[x]){
            alert("Sudah ditambahkan");
          }
          else{
               this.globalvar.favarr.push(this.globalvar.arr[j]);
          }
        }
    }
   
  }

  FAV2(){
      for(var x = 0; x < this.globalvar.arr.length; x++){
          alert(this.globalvar.arr[x]);
        }
  }

  BACK(){
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}