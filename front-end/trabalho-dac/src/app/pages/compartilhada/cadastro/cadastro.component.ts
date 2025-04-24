import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CepService } from '../../../services/cep.service';
import { HttpClient } from '@angular/common/http';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [provideNgxMask()],
})
export class CadastroComponent {
  cpf: string = '';
  nome: string = '';
  email: string = '';
  cep: string = '';
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
  numero: string = '';

  constructor(private cepService: CepService, private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/users'; // URL para salvar no db.json

  buscarCep(event : MouseEvent) {
    event.preventDefault();
    // console.log('Buscando CEP');
    if (!this.cep || this.cep.length !== 8) {
      alert('Por favor, informe um CEP válido.');
      return;
    }

    this.cepService.buscarCep(this.cep).subscribe(
      (data) => {
        this.rua = data.logradouro;
        this.bairro = data.bairro;
        this.cidade = data.localidade;
        this.estado = data.uf;
      },
      (error) => {
        console.error('Erro ao buscar CEP', error);
        alert('Erro ao buscar o CEP. Por favor, tente novamente.');
      }
    );
  }

  onSubmit() {
    const cadastroData = {
      cpf: this.cpf,
      nome: this.nome,
      email: this.email,
      cep: this.cep,
      rua: this.rua,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      numero: this.numero,
    };
    this.salvar(cadastroData).subscribe(
      (response) => {
        console.log('Usuário salvo com sucesso', response);
        alert('Cadastro realizado com sucesso!');
      },
      (error) => {
        console.error('Erro ao salvar usuário', error);
        alert('Erro ao salvar usuário. Tente novamente.');
      }
    );

    this.limparCampos();
  }

  salvar(cadastroData: any): Observable<any> {
    // console.log('Salvando novo usuário');
    return this.http.post(this.apiUrl, cadastroData);
  }

  limparCampos() {
    this.cpf = '';
    this.nome = '';
    this.email = '';
    this.cep = '';
    this.rua = '';
    this.bairro = '';
    this.cidade = '';
    this.estado = '';
    this.numero = '';
  }
}
