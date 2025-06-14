import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { CepService } from '../../../services/cep.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChild('formCadastro') formCadastro!: NgForm;

  novoUser: User = {} as User;

  loading: boolean = false;
  id: string = "";
  novoUserCadastro: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private cepService: CepService,

  ) {}

  ngOnInit(): void {

  }

  buscarCep(event: MouseEvent) {
    event.preventDefault();

    if (!this.novoUser.cep || this.novoUser.cep.length !== 8) {
      alert('Por favor, informe um CEP válido.');
      return;
    }

    this.cepService.buscarCep(this.novoUser.cep).subscribe(
      (data) => {
        this.novoUser.rua = data.logradouro;
        this.novoUser.bairro = data.bairro;
        this.novoUser.cidade = data.localidade;
        this.novoUser.estado = data.uf;
      },
      (error) => {
        console.error('Erro ao buscar CEP', error);
        alert('Erro ao buscar o CEP. Por favor, tente novamente.');
      }
    );
  }

  salvar(): void {
    this.loading = true;

    if (this.formCadastro.form.valid) {
      if (this.novoUserCadastro) {
        // Novo usuário
        // Gerar senha aleatória de 4 dígitos
        const senha = Math.floor(1000 + Math.random() * 9000).toString();
        this.novoUser.senha = senha;

        this.novoUser.id = new Date().getTime().toString();
        this.userService.salvar(this.novoUser).subscribe(
          (usuario) => {
            // Chamar serviço para enviar o e-mail
            this.userService.enviarEmailSenha(this.novoUser.email!, senha).subscribe(
              () => {
                this.loading = false;
                alert('Usuário cadastrado! A senha foi enviada por e-mail.');
                this.router.navigate(['/login']);
              },
        )},
          (error) => {
            this.loading = false;
            console.error('Erro ao inserir o usuário', error);
            alert('Erro ao inserir o usuário. Tente novamente.');
          }
        );
      }
    } else {
      this.loading = false;
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  limparCampos() {
    this.formCadastro.resetForm();
  }
}
