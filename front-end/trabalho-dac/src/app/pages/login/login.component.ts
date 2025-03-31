import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
            ReactiveFormsModule,    
          ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginError: String = '';
  loginErrorConta: String = 'Não possui uma conta? Clique em "Criar conta" para se cadastrar.';
  loginForm!: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Login realizado com sucesso!"),
      error: () => this.toastService.error("Erro ao realizar login! Tente novamente.")
    })
  }


  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

}
