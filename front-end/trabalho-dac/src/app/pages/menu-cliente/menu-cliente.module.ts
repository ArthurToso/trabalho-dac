import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando o CommonModule
import { MenuClienteComponent } from './menu-cliente.component';

@NgModule({
  declarations: [
    MenuClienteComponent  // Declarando o componente
  ],
  imports: [
    CommonModule  // Importando o CommonModule, necessário para *ngFor e *ngIf
  ],
  exports: [
    MenuClienteComponent  // Expondo o componente para outros módulos, se necessário
  ]
})
export class MenuClienteModule { }
