import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

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
    private router : Router
  ){}

  DONE(){
      this.router.navigate(["/page2"]);

  }
}
