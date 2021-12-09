import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExercicioDTO } from '../../model/ExercicioDTO';
import { RotinaService } from 'src/app/service/rotina.service';
import { Exercicio } from 'src/app/model/Exercicio';

@Component({
  selector: 'add-exercicio-card',
  templateUrl: './add-exercicio-card.component.html',
  styleUrls: ['./add-exercicio-card.component.css']
})
export class AddExercicioCardComponent implements OnInit {
  cadastroCard = false;
  /**
   * Verificar o porquê do objeto estar indo como undefined no Html.
   */

  @Input() idRotina!: string;

  @Output() addExercicio = new EventEmitter<any>();


  exercicio!: Exercicio;

  nome!:string;
  carga!:number;
  repeticoes!:number;
  series!:number;

  constructor(private rotinaService: RotinaService) { }

  ngOnInit(): void {
    console.log(this.idRotina)
  }

  addTreino(){
    this.cadastroCard = true;


  }

  salvarTreino(){
    if(this.nome && this.carga && this.repeticoes){
      this.exercicio = {
        nome: this.nome, 
        carga: this.carga,
        repeticoes: this.repeticoes,
        series: this.series,
        cargaAlcancada: 0,
        repeticoesFeitas: 0
      } 
    }
    console.log(this.exercicio)
    
   this.rotinaService.adicionarExercicio(this.idRotina,this.exercicio).subscribe(data=>{
      this.addExercicio.emit(data.novo_exercicio);
   });

  }

}
