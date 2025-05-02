import { Routes } from '@angular/router';
import { LoginComponent } from './pages/compartilhada/login/login.component';
import { CadastroComponent } from './pages/compartilhada/cadastro/cadastro.component';
import { MenuClienteComponent } from './pages/cliente/menu-cliente/menu-cliente.component';

import { ListarFuncionarioComponent } from './pages/funcionario/listar-funcionario/listar-funcionario.component';
import { InserirEditarFuncionarioComponent } from './pages/funcionario/inserir-editar-funcionario/inserir-editar-funcionario.component';
import { InserirVooComponent } from './pages/funcionario/inserir-voo/inserir-voo.component';
import { MenuFuncionarioComponent } from './pages/funcionario/menu-funcionario/menu-funcionario.component';
import { ComprarMilhasComponent } from './pages/cliente/comprar-milhas/comprar-milhas.component';
import { ExtratoMilhasComponent } from './pages/cliente/extrato-milhas/extrato-milhas.component';
import { EfetuarReservaComponent } from './pages/cliente/efetuar-reserva/efetuar-reserva.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: CadastroComponent },
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
  },
  {
    path : 'voo/novo',
    component : InserirVooComponent
  },
  {
    path : 'comprar/milhas',
    component : ComprarMilhasComponent
  },
  {
    path : 'clientes/{:id}/milhas',
    component : ExtratoMilhasComponent
  },
  {
    path : 'clientes/milhas',
    component : ExtratoMilhasComponent
  },
  {
    path : 'clientes/reservas',
    component : EfetuarReservaComponent
  }
];
