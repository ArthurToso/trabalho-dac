import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) {}
  
  private API_URL = 'https://viacep.com.br/ws/';

  buscarCep(cep: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${cep}/json/`);
  }
}
