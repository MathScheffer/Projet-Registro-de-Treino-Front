import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesConstants } from '../constants/RoutesConstants';
import { Rotina } from '../model/Rotina';
import { RotinaId } from '../model/RotinaId';
import { UsuarioDTO } from '../model/Usuario';

const httpOptions = {
  headers: new HttpHeaders({
    'contentType': 'Application/json'
  })
}

const apiUri = RoutesConstants.BASE_URI_USUARIOS;
const id = RoutesConstants.ID;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {  }

  buscarPorId(): Observable<UsuarioDTO>{
    const uri = apiUri+id;
    console.log(uri)
    return this.http.get<UsuarioDTO>(uri);
  }

  incrementarRotina(id_rotina: RotinaId): Observable<UsuarioDTO>{
    return this.http.put<UsuarioDTO>(apiUri + "incrementar-rotina/" + id, id_rotina, httpOptions )
  }
  getId(){
    return id;
  }
}
