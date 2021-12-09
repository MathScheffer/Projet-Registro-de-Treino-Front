import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExercicioDTO } from '../../model/ExercicioDTO';
import { RotinaService } from 'src/app/service/rotina.service';
import { Exercicio } from 'src/app/model/Exercicio';
import { Utils } from 'src/app/utils/Utils';
import { Rotina } from 'src/app/model/Rotina';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RotinaId } from 'src/app/model/RotinaId';


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

  constructor(private rotinaService: RotinaService, private usuarioService: UsuarioService) {
    console.log(this.nome)
   }

  ngOnInit(): void {
    console.log(this.idRotina)
    console.log(this.exercicio)
  }

  onChange(obj: any){
    console.log(obj)
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
    
    console.log(this.exercicio)
      if(this.idRotina){
        this.rotinaService.adicionarExercicio(this.idRotina,this.exercicio).subscribe(data=>{
          this.addExercicio.emit(data.novo_exercicio);
        });
        
      }else{
        const dia = Utils.formatarDia(this.rotinaService.getDia());
        console.log('sem id da rotina para o dia  '+dia)

        const newRotina: Rotina = {
          dia: dia,
          exercicios: [this.exercicio],
          usuario: this.usuarioService.getId()
        }
        
        console.log(this.exercicio)
        this.rotinaService.adicionarRotina(newRotina).subscribe(data => {
          const rotinaId: RotinaId = {rotina: data._id};
          
          this.usuarioService.incrementarRotina(rotinaId).subscribe(user => {
            this.addExercicio.emit(user);
          }) 
        })

      }
    }

  }

}
