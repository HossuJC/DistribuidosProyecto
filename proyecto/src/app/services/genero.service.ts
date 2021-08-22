import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SeccionService } from './seccion.service';
import { environment } from '../../environments/environment';

const _apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  libros = [];

  constructor(private http: HttpClient, private seccion: SeccionService) {}

  getAllGenres(): Observable<any> {
    return this.http.get(`${_apiUrl}/genero`);
  }
}
