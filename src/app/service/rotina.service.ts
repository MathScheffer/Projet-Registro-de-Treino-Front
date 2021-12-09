import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RotinaConstants } from '../constants/RotinaConstants';
import { Exercicio } from '../model/Exercicio';
import { ExercicioDTO } from '../model/ExercicioDTO';
import { Rotina } from '../model/Rotina';
import { RotinaDTO } from '../model/RotinaDTO';
import { Utils } from '../utils/Utils';

const httpOptions = RotinaConstants.baseHttpOptions;
const baseUri = RotinaConstants.BASE_URI_ROTINAS;


@Injectable({
  providedIn: 'root'
})
export class RotinaService {
  dia:string = ""

  rotina!: RotinaDTO[]
  
  constructor(private http: HttpClient) { 

  }

  adicionarRotina(body: Rotina): Observable<RotinaDTO>{
    return this.http.post<RotinaDTO>(baseUri,body ,httpOptions);
  }

  adicionarExercicio(id_rotina: string, body: Exercicio): Observable<any>{
    const uri = baseUri + id_rotina + '/exercicio/adicionar'
    console.log(uri)
    return this.http.put<any>(uri, body, httpOptions);
  }

  alterarRegistro(id:string, body: ExercicioDTO): Observable<ExercicioDTO>{
    const uri = `${baseUri}exercicio/${id}/registrar`

    const obj = {
      cargaAlcancada: body.cargaAlcancada,
      repeticoesFeitas: body.repeticoesFeitas
    }

    return this.http.put<ExercicioDTO>(uri, obj, httpOptions);
  }

  excluirExercicio(id:string): Observable<ExercicioDTO>{
    const uri = baseUri + 'exercicio/' + id;
    console.log(uri)
    return this.http.delete<ExercicioDTO>(baseUri + 'exercicio/' + id ,httpOptions)
  }

  buscarExercicio(id: string): Observable<ExercicioDTO>{ 
    return this.http.get<ExercicioDTO>(baseUri + 'exercicio/' + id, httpOptions)
  }

  setDia(dia:string){
    this.dia = dia
  }

  getDia():string{
    return this.dia
  }

  setRotina(rotina:RotinaDTO[]){
    this.rotina = rotina;
  }
  
  getRotina(){
    return this.rotina;
  }

  getRotinaDia(dia: string): RotinaDTO{
    const diaDesejado = Utils.formatarDia(dia) ? Utils.formatarDia(dia) : dia;

    return this.rotina.filter(r => r.dia == diaDesejado)[0];
  }

  getExerciciosDia(dia: string): ExercicioDTO[]{
    const diaDesejado = Utils.formatarDia(dia);

    const rotinaDia = this.rotina.filter(r => r.dia == diaDesejado);

    const exercicios: ExercicioDTO[] = rotinaDia[0].exercicios
    return exercicios;
    
  }
}
