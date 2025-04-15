import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private apiUrl = 'http://localhost:3000/reservas' // URL do json-server

  constructor(private http: HttpClient) {}

   // Método para obter todas as reservas de um usuário
   getReservasPorUsuario(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?id_user=${userId}`);
  }

  getReservas(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  
}
