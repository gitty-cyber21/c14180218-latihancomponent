import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  public arr : any[][];

  constructor() { 
    this.arr = [];
  }

}