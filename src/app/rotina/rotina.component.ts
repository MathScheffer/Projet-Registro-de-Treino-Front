import { Component, OnInit } from '@angular/core';
import { RotinaService } from '../service/rotina.service';

@Component({
  selector: 'rotina',
  templateUrl: './rotina.component.html',
  styleUrls: ['./rotina.component.css']
})
export class RotinaComponent implements OnInit {

  constructor(private rotinaService: RotinaService) { }

  nome!:string;
  
  ngOnInit(): void {
    this.nome = this.rotinaService.getDia();
  }

}
