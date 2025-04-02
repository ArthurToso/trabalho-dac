import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe o CommonModule
import { MenuFuncComponent } from './menu-func.component'; // Componente do Menu Func

@NgModule({
  declarations: [
    MenuFuncComponent
  ],
  imports: [
    CommonModule  // Certifique-se de adicionar o CommonModule aqui
  ],
  exports: [
    MenuFuncComponent  // Se você estiver exportando esse componente
  ]
})
export class MenuFuncModule { }
