import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Login } from '../models/login.model';
import { User } from '../models/user';

const LS_CHAVE: string = 'usuarioLogado';

@Injectable({ providedIn: 'root' })
export class LoginService {
  BASE_URL = 'http://localhost:3000/users'; // URL do JSON-server (ou API)

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

 public get usuarioLogado(): User | null {
  // Verifica se o código está sendo executado no navegador
  if (typeof window !== 'undefined') {
    let usu = localStorage.getItem(LS_CHAVE);
    return usu ? JSON.parse(usu) : null;
  }
  return null;
}

public set usuarioLogado(usuario: User) {
  // Verifica se o código está sendo executado no navegador
  if (typeof window !== 'undefined') {
    localStorage.setItem(LS_CHAVE, JSON.stringify(usuario));
  }
}

  login(login: Login): Observable<User | null> {
    // Faz a requisição GET com os dados de email e senha
    return this.httpClient
      .get<User[]>(
        `${this.BASE_URL}?email=${login.email}&senha=${login.senha}`,
        this.httpOptions
      )
      .pipe(
        map((users: User[]) => {
          console.log(users);
          if (users.length >= 0) {
            const user = users[0];
            return user;
          } else {
            throw { status: 400, message: 'Usuário ou senha inválidos' };
          }
        }),
        catchError((err) => {
          return throwError(() => err);
        })
      );
  }
  logout(): void {
    // Limpar o usuário do localStorage
    localStorage.removeItem('usuarioLogado');
    // Limpar o ID do sessionStorage
    sessionStorage.removeItem('id');
    console.log('Usuário deslogado com sucesso');
  }
}
