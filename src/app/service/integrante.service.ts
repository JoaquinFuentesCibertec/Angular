import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Integrante } from '../models/integrante';

@Injectable({
  providedIn: 'root'
})
export class IntegranteService {
  integranteURL = 'http://localhost:8080/integrantes'
  constructor(private HttpClient: HttpClient ) {}

  public lista(): Observable<Integrante[]>{
    return this.HttpClient.get<Integrante[]>(this.integranteURL);
  }

  public GetId(codInt: number): Observable<any>{
    return this.HttpClient.get(this.integranteURL + "/integrante/" + codInt)
  }

  public eliminar(productId: number): Observable<any>{
    return this.HttpClient.delete(this.integranteURL + "/int/" + productId);
  }

  public guardar(integrante:any):Observable<any>{
    return this.HttpClient.post(this.integranteURL + "/nuevoInt", integrante);
  }

  public actualizar(integrante: number, intAct:any): Observable<any>{
    return this.HttpClient.put(this.integranteURL + "/actualizarI/" + integrante, intAct);
  }
}
