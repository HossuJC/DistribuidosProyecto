import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const _apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class SeccionService {
  constructor(private http: HttpClient) {}

  send_seccion(
    titulo: string,
    obraid: number,
    contenido: string,
    block: string
  ) {
    const seccion = {
      titulo: titulo,
      contenido: contenido,
      obraid: obraid,
      block: block,
    };
    return this.http.post(`${_apiUrl}/api/seccion`, seccion);
  }

  createSection(seccion: any) {
    return this.http.post(`${_apiUrl}/seccion`, seccion);
  }

  getAllSectionsByObraId(id: any) {
    return this.http.get(`${_apiUrl}/seccion/obra/${id}`);
  }

  updateSection(section: any, id: any) {
    return this.http.patch(`${_apiUrl}/seccion/${id}`, section);
  }

  get_seccion_id(id: number): Observable<any> {
    return this.http.get(`${_apiUrl}/seccion/${id}`);
  }

  update_sect(id: number, titulo: string, contenido: string) {
    const seccion = {
      titulo: titulo,
      contenido: contenido,
    };

    return this.http.patch(`${_apiUrl}/seccion/${id}`, seccion);
  }

  getAllSectionsFromBookId(id: number): Observable<any> {
    return this.http.get(`${_apiUrl}/seccion/obra/${id}`);
  }

  deleteSection(id: any) {
    return this.http.delete(`${_apiUrl}/seccion/${id}`);
  }

}
