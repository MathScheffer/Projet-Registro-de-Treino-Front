import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {
  dia:string = ""
  constructor() { }

  setDia(dia:string){
    this.dia = dia
  }

  getDia():string{
    return this.dia
  }
}
