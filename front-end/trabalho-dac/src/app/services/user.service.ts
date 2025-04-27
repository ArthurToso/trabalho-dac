import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL do json-server

  //opcoes http (header)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Método para salvar um novo usuário
  salvar(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Método para buscar um usuário pelo ID
  getUserPorId(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  devolverMilhas(milhas: number, user : User): Observable<User> {
    user.milhas += milhas;
    return this.http.patch<User>(`http://localhost:3000/users/${user.id}`, JSON.stringify(user), this.httpOptions)

}
}