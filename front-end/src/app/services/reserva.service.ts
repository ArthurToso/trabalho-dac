import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  
  private apiUrl = 'http://localhost:3000/reservas' // URL do json-server

    //opcoes http (header)
    httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

  constructor(private http: HttpClient, private userService : UserService
  ) {}

   // Método para obter todas as reservas de um usuário
   getReservasPorUsuario(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?id_user=${userId}`);
  }

  getReservas(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  
  cancelar(reserva : Reserva) : Observable<Reserva>{
    reserva.status = "CANCELADA";
    return this.http.put<Reserva>(`${this.apiUrl}/${reserva.id}`, JSON.stringify(reserva), this.httpOptions)
  }
}
