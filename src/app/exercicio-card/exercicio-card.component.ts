import { Component, Input, OnInit } from '@angular/core';
import { ExercicioDTO } from '../model/ExercicioDTO';
import { RotinaService } from '../service/rotina.service';

@Component({
  selector: 'exercicio-card',
  templateUrl: './exercicio-card.component.html',
  styleUrls: ['./exercicio-card.component.css']
})
export class ExercicioCardComponent implements OnInit {

  @Input() exercicio!: ExercicioDTO;
  id!: string;

  constructor(private rotinaService: RotinaService) { }

  ngOnInit(): void {
    this.id = this.exercicio._id;
  }

  renderizarExercicio(){
      this.rotinaService.buscarExercicio(this.id).subscribe(data => {
        this.exercicio = data;
      })

  }

  salvarTreino(){
    this.rotinaService.alterarRegistro(this.id, this.exercicio).subscribe(data=> {
      console.log(this.exercicio);
    })
  }

  limparTreino(){
    this.exercicio.cargaAlcancada = 0;
    this.exercicio.repeticoesFeitas = 0;

    this.rotinaService.alterarRegistro(this.id, this.exercicio).subscribe(data=> {
      console.log(this.exercicio);
    })
  }

  excluirTreino(){
    console.log(this.id)
    this.rotinaService.excluirExercicio(this.id).subscribe(data => {
      console.log(data)
    });
    this.exercicio = new ExercicioDTO();
  }

}
