import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const _apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUser(user: String): Observable<any> {
    return this.http.get(`${_apiUrl}/${user}`);
  }
  /* register():Observable<any>{
    return this.http.post(`${_apiUrl}/login/register`);
  }*/
}
