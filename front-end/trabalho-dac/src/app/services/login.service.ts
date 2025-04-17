import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  // Método para salvar usuários no localStorage
  saveUserToLocalStorage(user: LoginResponse) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Método para simular login com dados do localStorage
  login(name: string, password: string): Observable<LoginResponse> {
    const users: LoginResponse[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.name === name && u.token === password); // Aqui usamos o token como senha para simplificar

    if (user) {
      sessionStorage.setItem("auth-token", user.token);
      sessionStorage.setItem("name", user.name);
      sessionStorage.setItem("user-type", user.userType);
      return of(user); // Retorna o usuário como um Observable
    } else {
      throw new Error("Usuário ou senha inválidos!");
    }
  }

  getRedirectRoute(userType: 'func' | 'client'): string {
    if (userType === 'func') {
      return '/menu-func';
    } else if (userType === 'client') {
      return '/menu-client';
    } else {
      throw new Error("Tipo de usuário desconhecido!");
    }
  }
}
