import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuClienteComponent } from './menu-cliente.component';

@NgModule({
  declarations: [
    MenuClienteComponent // Declare o componente aqui
  ],
  imports: [
    CommonModule // Necessário para *ngFor e *ngIf
  ],
  exports: [
    MenuClienteComponent // Exporte o componente para usá-lo em outros módulos
  ]
})
export class MenuClienteModule { }
