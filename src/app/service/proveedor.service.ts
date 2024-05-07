import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  proveedorURL = 'http://localhost:8080/proveedores'
  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Proveedor[]>{
    return this.HttpClient.get<Proveedor[]>(this.proveedorURL);
  }

  public GetId(codProv: number): Observable<any>{
    return this.HttpClient.get(this.proveedorURL + "/proveedor/" + codProv)
  }

  public eliminar(productId: number): Observable<any>{
    return this.HttpClient.delete(this.proveedorURL + "/codPro/" + productId);
  }

  public guardar(proveedor:any): Observable<any>{
    return this.HttpClient.post(this.proveedorURL + "/nuevoProv", proveedor);
  }

  public actualizar(proveedor: number,provAct:any): Observable<any>{
    return this.HttpClient.put(this.proveedorURL + "/actualizarP/" + proveedor, provAct);
  }
}
