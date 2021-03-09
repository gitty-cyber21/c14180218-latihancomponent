import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  textjudul = "";
  textisi = "";
  tanggal = "";

  constructor(
    private router : Router, public globalvar : GlobalvarService
  ){}

  DONE(){
    var inp = [];
    inp[0] = this.textjudul.toString();
    console.log(this.textjudul.toString);
    inp[1] = this.textisi.toString();
    console.log(inp[1]);
    inp[2] = this.tanggal.toString();
    console.log(inp[2]);

    this.globalvar.arr.push(inp);
  }

  PAGE2(){
    this.router.navigate(["/page2"]);
  }

  PAGE3(){
    this.router.navigate(["/page3"]);
  }

  
}
