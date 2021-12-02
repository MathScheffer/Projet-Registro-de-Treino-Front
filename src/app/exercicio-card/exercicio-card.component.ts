import { Component, Input, OnInit } from '@angular/core';
import { ExercicioDTO } from '../model/ExercicioDTO';

@Component({
  selector: 'exercicio-card',
  templateUrl: './exercicio-card.component.html',
  styleUrls: ['./exercicio-card.component.css']
})
export class ExercicioCardComponent implements OnInit {

  @Input() exercicio!: ExercicioDTO;

  constructor() { }

  ngOnInit(): void {
    
  }

  salvarTreino(){
    console.log(this.exercicio.cargaAlcancada, this.exercicio.repeticoesFeitas)
  }

  limparTreino(){
    this.exercicio.cargaAlcancada = 0;
    this.exercicio.repeticoesFeitas = 0;
  }



}
