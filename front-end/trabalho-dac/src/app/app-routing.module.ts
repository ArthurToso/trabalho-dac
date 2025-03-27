import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuClienteComponent } from './pages/menu-cliente/menu-cliente.component'; // Importe o componente

const routes: Routes = [
  { path: 'menu-cliente', component: MenuClienteComponent }, // Rota para o MenuClienteComponent
  { path: '', redirectTo: '/menu-cliente', pathMatch: 'full' } // Redireciona para o menu-cliente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
