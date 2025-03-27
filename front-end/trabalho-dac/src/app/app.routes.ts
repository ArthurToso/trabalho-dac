import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MenuClienteComponent } from './pages/menu-cliente/menu-cliente.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'signup',
    component: CadastroComponent
  },
  { path: 'menu-cliente', component: MenuClienteComponent }
];
