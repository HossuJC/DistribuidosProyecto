import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SeccionService } from './seccion.service';
import { environment } from '../../environments/environment';

const _apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  libros = [];

  constructor(private http: HttpClient, private seccion: SeccionService) {}

  createBiblioteca(obraid: number): Observable<any> {
    const seccion = {
      usuarioId: localStorage.getItem('id_user'),
      obraId: obraid,
    };
    return this.http.post(`${_apiUrl}/biblioteca`, seccion);
  }

  getBibliotecas(): Observable<any> {
    return this.http.get(
      `${_apiUrl}/biblioteca/usuario/${localStorage.getItem('id_user')}`
    );
  }

  eliminarBiblioteca(bibid: number): Observable<any> {
    return this.http.delete(`${_apiUrl}/biblioteca/${bibid}`);
  }
}
