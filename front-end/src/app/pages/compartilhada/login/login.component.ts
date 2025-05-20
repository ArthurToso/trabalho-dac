import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Login } from '../../../models/login.model';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  navigateToSignup() {
    throw new Error('Method not implemented.');
  }
  @ViewChild('formLogin') formLogin!: NgForm; // Corrigido para garantir que a referência seja de um formulário
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // Verifica se o usuário já está logado ao iniciar o componente
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/clientes/${id}']); // Se o usuário estiver logado, redireciona para a página principal
    }
  }

  logar(): void {
    this.loading = true;

    if (this.login.email && this.login.senha) {
      this.loginService.login(this.login).subscribe({
        next: (usu) => {
          if (usu) {
            // Armazenando o usuário no localStorage
            this.loginService.usuarioLogado = usu;
            sessionStorage.setItem('id', usu.id.toString()); // Armazena o ID do usuário na sessão
            console.log(usu);
            // Redireciona para o cliente/id
            this.redirecionarPorPerfil(usu);
          } else {
            this.message = 'Usuário/senha inválido.';
          }
          this.loading = false;
        },
        error: (err) => {
          console.error('Erro no login:', err);
          this.message = 'Ocorreu um erro inesperado.';
          this.loading = false;
        },
      });
    } else {
      this.loading = false;
      this.message = 'Preencha o formulário corretamente.';
    }
  }

 

  // Função de redirecionamento baseada no perfil
  private redirecionarPorPerfil(usu: User): void {
    switch (usu.perfil) {
      case 'CLIENTE':
        // Redireciona para a página do cliente com ID na URL
        this.router.navigate([`/clientes/${usu.id}`]);
        break;
      case 'FUNCIONARIO':
        // Redireciona para a página do funcionário com ID na URL
        this.router.navigate([`/funcionarios/${usu.id}`]);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }
}
