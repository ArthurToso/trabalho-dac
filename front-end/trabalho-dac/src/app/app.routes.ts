import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MenuClienteComponent } from './pages/menu-cliente/menu-cliente.component';
import { MenuFuncionarioComponent } from './pages/menu-funcionario/menu-funcionario.component';
import { ListarFuncionarioComponent } from './pages/funcionario/listar-funcionario/listar-funcionario.component';
import { InserirEditarFuncionarioComponent } from './pages/funcionario/inserir-editar-funcionario/inserir-editar-funcionario.component';

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
  { path: 'menu-cliente', component: MenuClienteComponent },
  {
    path: 'menu-funcionario',
    component: MenuFuncionarioComponent
  },
  {
    path : 'funcionario/listar',
    component : ListarFuncionarioComponent
  },
  {
    path : 'funcionario/novo',
    component : InserirEditarFuncionarioComponent
  },
  {
    path : 'funcionario/editar/:id',
    component : InserirEditarFuncionarioComponent
  }
];
