import { Component, Input, OnInit } from '@angular/core';
import { RotinaService } from '../../service/rotina.service';

@Component({
  selector: 'card-rotina',
  templateUrl: './card-rotina.component.html',
  styleUrls: ['./card-rotina.component.css']
})
export class CardRotinaComponent implements OnInit {
  @Input() nome = "";
  @Input() link = "";

  constructor(private rotinaService: RotinaService) { }

  ngOnInit(): void {

  }

  apontarNome(){
    this.rotinaService.setDia(this.nome);
  }

}