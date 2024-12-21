import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  private apiUrl = 'http://localhost:8080/api/editoriales';

  constructor(private http: HttpClient) { }

  listarEditoriales(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.apiUrl);
  }

  registrarEditorial(editorial: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(this.apiUrl, editorial);
  }

  descargarReporteEditoriales(): Observable<Blob> {
    const url = `${this.apiUrl}/reportes`;
    return this.http.get(url, { responseType: 'blob' });
  }

}
