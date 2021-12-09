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
        console.log(data)
        this.usuario = data;
        this.nome = this.rotinaService.getDia();
        this.rotinaService.setRotina(this.usuario.rotina);
        this.rotina = this.rotinaService.getRotinaDia(this.nome);
        
        this.exercicios = this.rotinaService.getExerciciosDia(this.nome);
    })
  }

  incrementarExercicio(exercicio: ExercicioDTO){
    console.log(exercicio)
    this.inicializaUsuario();
  }

}
