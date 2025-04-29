import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  BASE_URL = "http://localhost:3000/funcionario";

  //opcoes http (header)
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(
    private http : HttpClient
  ) { }

  listarTodos() : Observable<Funcionario[]>{
      return this.http.get<Funcionario[]>(this.BASE_URL, this.httpOptions)
  }

  buscarPorId(id : number) : Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.BASE_URL}/${id}`, this.httpOptions);
  }

  inserir(user : Funcionario) : Observable<Funcionario>{
    return this.http.post<Funcionario>(this.BASE_URL, JSON.stringify(user), this.httpOptions)
  }

  remover(user : Funcionario) : Observable<Funcionario>{
    user.ativo = false;
    return this.http.put<Funcionario>(`${this.BASE_URL}/${user.id}`, JSON.stringify(user), this.httpOptions)
  }

  alterar(user : Funcionario) : Observable<Funcionario>{
    return this.http.put<Funcionario>(`${this.BASE_URL}/${user.id}`, JSON.stringify(user), this.httpOptions)
  }
}


