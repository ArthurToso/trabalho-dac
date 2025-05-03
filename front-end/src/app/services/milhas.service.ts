import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Milha } from '../models/milha.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilhasService {

  constructor(private http : HttpClient) { }

  private apiUrl = 'http://localhost:3000/milhas' // URL do json-server
  
      //opcoes http (header)
      httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
  
  
     // Método para obter todas as milhas de um usuário
     getMilhasPorUsuario(userId: number): Observable<Milha[]> {
      return this.http.get<Milha[]>(`${this.apiUrl}?id_user=${userId}`, this.httpOptions);
    }
  

  
}
