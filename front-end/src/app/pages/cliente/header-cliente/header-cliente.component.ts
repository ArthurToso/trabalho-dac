import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-header-cliente',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.css',
})
export class HeaderClienteComponent {
  constructor(private login: LoginService) {}
  logout() {
    this.login.logout();
    localStorage.clear();
  }
}
