import { Component, OnInit } from '@angular/core';
import { ExercicioDTO } from '../model/ExercicioDTO';
import { RotinaDTO } from '../model/RotinaDTO';
import { UsuarioDTO } from '../model/Usuario';
import { ExerciciosService } from '../service/exercicios.service';
import { RotinaService } from '../service/rotina.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'rotina',
  templateUrl: './rotina.component.html',
  styleUrls: ['./rotina.component.css']
})
export class RotinaComponent implements OnInit {
  nome!:string;
  exercicios!:ExercicioDTO[];
  usuario!:UsuarioDTO;
  rotina!:RotinaDTO;
  idRotina!:string;

  constructor(
    private rotinaService: RotinaService,
    private exerciciosService: ExerciciosService,
    private usuarioService: UsuarioService
    ) { 
      
      this.inicializaUsuario();
    }
  
  ngOnInit(): void {

  }

  inicializaUsuario(){
      this.usuarioService.buscarPorId().subscribe(data=> {
        this.usuario = data;
        this.nome = this.rotinaService.getDia();
        this.rotinaService.setRotina(this.usuario.rotina);
        this.rotina = this.rotinaService.getRotinaDia(this.nome);
        this.idRotina = this.rotina ? this.rotina._id : ""
        this.exercicios = this.rotinaService.getExerciciosDia(this.nome);
    })
  }

  incrementarExercicio(exercicio: ExercicioDTO | RotinaDTO | UsuarioDTO){
   // console.log(typeof exercicio)
    this.inicializaUsuario();
  }

}
