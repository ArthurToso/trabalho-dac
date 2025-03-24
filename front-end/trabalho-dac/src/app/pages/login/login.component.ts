import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginError: String = '';
  loginErrorConta: String = 'Não possui uma conta? Clique em "Criar conta" para se cadastrar.';
}
