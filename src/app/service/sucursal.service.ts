import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private apiUrl = 'http://localhost:8080/api/sucursales';

  constructor(private http: HttpClient) { }

  listarSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.apiUrl);
  }

  registrarSucursal(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.apiUrl, sucursal);
  }

  actualizarSucursal(id: number, sucursal: Sucursal): Observable<Sucursal> {
    return this.http.put<Sucursal>(`${this.apiUrl}/${id}`, sucursal);
  }

  eliminarSucursal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  obtenerSucursalPorId(id: number): Observable<Sucursal> {
    return this.http.get<Sucursal>(`${this.apiUrl}/${id}`);
  }

  obtenerSucursalConMantenimientos(id: number): Observable<Sucursal> {
    return this.http.get<Sucursal>(`${this.apiUrl}/sucursalMantenimiento/${id}`);
  }

  descargarReporteSucursales(): Observable<Blob> {
    const url = `${this.apiUrl}/reportes`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
