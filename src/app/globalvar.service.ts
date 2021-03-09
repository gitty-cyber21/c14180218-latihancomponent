import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  public arr : any[][];
  public fav = 0;
  public favarr : any[][];

  constructor() { 
    this.arr = [];
    this.favarr = [];
  }

}