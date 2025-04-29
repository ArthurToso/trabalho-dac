import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voo } from '../models/voo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VooService {

  private apiUrl = 'http://localhost:3000/voos' // URL do json-server
  
      //opcoes http (header)
      httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      }
  
    constructor(private http: HttpClient
    ) {}
  
  
  
    getVoos(): Observable<Voo[]>{
      return this.http.get<Voo[]>(`${this.apiUrl}`, this.httpOptions);
    }
    
    cancelar(voo : Voo) : Observable<Voo>{
      voo.status = "CANCELADA";
      return this.http.put<Voo>(`${this.apiUrl}/${voo.id}`, JSON.stringify(voo), this.httpOptions)
    }
}
