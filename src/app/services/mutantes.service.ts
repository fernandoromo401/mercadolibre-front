import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';
import { stringify } from 'querystring';



@Injectable({
  providedIn: 'root'
})
export class MutantesService {
  
  public url = 'http://localhost:9000/api/v1/'
  constructor(
    private _http: HttpClient
  ) { 

  }

  test(){
    let prueba = 'Probando servicio'
    
    return prueba
  }
  promedio():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'localhost:4200')
    return this._http.get<any>(this.url+'stats/' , {headers: headers})
  }
  adn(adnGenerado):Observable<any>{
        
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.post(this.url+'mutant/' , adnGenerado, {headers: headers})
  }
}
