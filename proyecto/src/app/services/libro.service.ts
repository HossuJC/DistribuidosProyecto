import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Libro } from '../components/collection/libro.model';
import { SeccionService } from './seccion.service';
import { environment } from '../../environments/environment';

const _apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  libros = [];

  constructor(private http: HttpClient, private seccion: SeccionService) {}

  getAllObras(): Observable<any> {
    return this.http.get(`${_apiUrl}/obra`);
  }

  sendLibro(libro: any): Observable<any> {
    return this.http.post(`${_apiUrl}/obra`, libro);
  }

  getLibroById(id: number): Observable<any> {
    return this.http.get(`${_apiUrl}/obra/${id}`);
  }

  getLibroByEscritor(id: number): Observable<any> {
    return this.http.get(`${_apiUrl}/obra/escritor/${id}`);
  }

  get_libro_por_nombre(titulo: string): Observable<any> {
    return this.http.get(`${_apiUrl}/libro/${titulo}`);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${_apiUrl}/obra/${id}`);
  }
}
