import { HttpHeaders } from "@angular/common/http";

export class RotinaConstants{
    static BASE_URI_ROTINAS = "http://localhost:3000/api/rotinas/";

    static baseHttpOptions = {
        headers: new HttpHeaders({
          'contentType': 'Application/json'
        })
    }
      
      
}