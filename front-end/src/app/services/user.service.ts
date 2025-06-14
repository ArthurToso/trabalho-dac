import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // apiUrl = 'http://localhost:3000/users'; // URL do json-server

  apiUrl = 'http://localhost:5000'// URL do Gateway

  //opcoes http (header)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient) { }

  // Método para salvar um novo usuário
  salvar(user: User): Observable<User> {
    return this.http.post<User>('${this.apiUrl}/clientes', JSON.stringify(user), this.httpOptions);
  }

  // Método para buscar um usuário pelo ID
  getUserPorId(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  devolverMilhas(milhas: number, user: User): Observable<User> {
    user.milhas += milhas;
    return this.http.patch<User>(`http://localhost:3000/users/${user.id}`, JSON.stringify(user), this.httpOptions)

  }

  enviarEmailSenha(email: string, senha: string) {
    // Chama o endpoint do backend responsável por enviar o e-mail
    return this.http.post('/api/enviar-email-senha', { email, senha });
  }

}
