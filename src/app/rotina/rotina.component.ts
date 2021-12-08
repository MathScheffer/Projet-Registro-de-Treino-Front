import { Component, OnInit } from '@angular/core';
import { ExercicioDTO } from '../model/ExercicioDTO';
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
  exercicios!:any;
  usuario!:UsuarioDTO;
  constructor(
    private rotinaService: RotinaService,
    private exerciciosService: ExerciciosService,
    private usuarioService: UsuarioService
    ) { 
      this.inicializaUsuario();
      
    }
  
  ngOnInit(): void {
    console.log(this.usuario)
    
  }

  inicializaUsuario(){
    this.usuarioService.buscarPorId().subscribe(data=> {
      this.usuario = data;
      this.nome = this.rotinaService.getDia();
    this.exercicios = this.rotinaService.getExerciciosDia(this.nome);

    })
  }

}
