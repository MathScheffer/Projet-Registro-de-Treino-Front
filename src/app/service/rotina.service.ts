import { Injectable } from '@angular/core';
import { ExercicioDTO } from '../model/ExercicioDTO';
import { RotinaDTO } from '../model/RotinaDTO';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {
  dia:string = ""
/*   rotina: RotinaDTO[] = [
    {
      "_id": "61a41164b357bd056ca4d386",
      "usuario": "619acab894f91f3a28f24e90",
      "dia": "Segunda",
      "exercicios": [
          {
              "cargaAlcancada": 0,
              "repeticoesFeitas": 0,
              "_id": "61a41164b357bd056ca4d387",
              "nome": "Rosca Direta",
              "carga": 10,
              "repeticoes": 10
          },
          {
              "cargaAlcancada": 0,
              "repeticoesFeitas": 0,
              "_id": "61a4282db5266209fcfb3d5c",
              "nome": "Superman",
              "carga": 10,
              "repeticoes": 10
          },
          {
              "cargaAlcancada": 0,
              "repeticoesFeitas": 0,
              "_id": "61a4283cb5266209fcfb3d61",
              "nome": "Rosca Scott",
              "carga": 10,
              "repeticoes": 10
          }
      ]
  },
      {
        "_id": "61a41164b357bd056ca4d386",
        "usuario": "619acab894f91f3a28f24e90",
        "dia": "Terça",
        "exercicios": [
            {
                "cargaAlcancada": 0,
                "repeticoesFeitas": 0,
                "_id": "61a41164b357bd056ca4d387",
                "nome": "Agachamento Livre",
                "carga": 10,
                "repeticoes": 10
            },
            {
                "cargaAlcancada": 0,
                "repeticoesFeitas": 0,
                "_id": "61a4282db5266209fcfb3d5c",
                "nome": "Legpress",
                "carga": 10,
                "repeticoes": 10
            },
            {
                "cargaAlcancada": 0,
                "repeticoesFeitas": 0,
                "_id": "61a4283cb5266209fcfb3d61",
                "nome": "Cici",
                "carga": 10,
                "repeticoes": 10
            }
        ]
    },
    {
      "_id": "61a41164b357bd056ca4d386",
      "usuario": "619acab894f91f3a28f24e90",
      "dia": "Quarta",
      "exercicios": [
          {
              "cargaAlcancada": 0,
              "repeticoesFeitas": 0,
              "_id": "61a41164b357bd056ca4d387",
              "nome": "Supino Reto",
              "carga": 10,
              "repeticoes": 10
          },
          {
              "cargaAlcancada": 0,
              "repeticoesFeitas": 0,
              "_id": "61a4282db5266209fcfb3d5c",
              "nome": "Supino Inclinado",
              "carga": 10,
              "repeticoes": 10
          },
          {
              "cargaAlcancada": 0,
              "repeticoesFeitas": 0,
              "_id": "61a4283cb5266209fcfb3d61",
              "nome": "Voador",
              "carga": 10,
              "repeticoes": 10
          }
      ]
  },
  {
    "_id": "61a41164b357bd056ca4d386",
    "usuario": "619acab894f91f3a28f24e90",
    "dia": "Quinta",
    "exercicios": [
        {
            "cargaAlcancada": 0,
            "repeticoesFeitas": 0,
            "_id": "61a41164b357bd056ca4d387",
            "nome": "Triceps na Corda",
            "carga": 10,
            "repeticoes": 10
        },
        {
            "cargaAlcancada": 0,
            "repeticoesFeitas": 0,
            "_id": "61a4282db5266209fcfb3d5c",
            "nome": "Tríceps Testa",
            "carga": 10,
            "repeticoes": 10
        },
        {
            "cargaAlcancada": 0,
            "repeticoesFeitas": 0,
            "_id": "61a4283cb5266209fcfb3d61",
            "nome": "Francês",
            "carga": 10,
            "repeticoes": 10
        }
    ]
  },    {
    "_id": "61a41164b357bd056ca4d386",
    "usuario": "619acab894f91f3a28f24e90",
    "dia": "Sexta",
    "exercicios": [
        {
            "cargaAlcancada": 0,
            "repeticoesFeitas": 0,
            "_id": "61a41164b357bd056ca4d387",
            "nome": "Barra Livre",
            "carga": 10,
            "repeticoes": 10
        },
        {
            "cargaAlcancada": 0,
            "repeticoesFeitas": 0,
            "_id": "61a4282db5266209fcfb3d5c",
            "nome": "Puxada Frontal",
            "carga": 10,
            "repeticoes": 10
        },
        {
            "cargaAlcancada": 0,
            "repeticoesFeitas": 0,
            "_id": "61a4283cb5266209fcfb3d61",
            "nome": "Remada Curvada",
            "carga": 10,
            "repeticoes": 10
        }
    ]
  },  
  ] */

  
  rotina!: RotinaDTO[]
  
  
  constructor() { 

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

  getExerciciosDia(dia: string): ExercicioDTO[]{
    const diaDesejado = this.formatarDia(dia);

    const rotinaDia = this.rotina.filter(r => r.dia == diaDesejado);

    const exercicios: ExercicioDTO[] = rotinaDia[0].exercicios
    return exercicios;
    
  }

  formatarDia(dia: string): string{
    switch(dia){
      case "SEG":
        return "Segunda";
        break;
      case "TER":
        return "Terça";
        break;
      case "QUA":
        return "Quarta";
        break;
      case "QUI":
        return "Quinta";
        break;
      case "SEX":
        return "Sexta";
        break;
      default:
        return "";
    }
  }
}
