import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesConstants } from '../constants/RoutesConstants';
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

    return this.http.get<UsuarioDTO>(uri);
  }

}
