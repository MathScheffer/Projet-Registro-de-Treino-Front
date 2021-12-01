import { Component, OnInit } from '@angular/core';
import { ExercicioDTO } from '../model/ExercicioDTO';
import { ExerciciosService } from '../service/exercicios.service';
import { RotinaService } from '../service/rotina.service';

@Component({
  selector: 'rotina',
  templateUrl: './rotina.component.html',
  styleUrls: ['./rotina.component.css']
})
export class RotinaComponent implements OnInit {
  nome!:string;
  exercicios!:any;
  constructor(
    private rotinaService: RotinaService,
    private exerciciosService: ExerciciosService
    
    ) { }
  
  ngOnInit(): void {
    this.nome = this.rotinaService.getDia();
    this.exercicios = this.rotinaService.getExerciciosDia(this.nome);
    console.log(this.exercicios)
  }

}
