import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuClienteModule } from './pages/menu-cliente/menu-cliente.module';
import { MenuFuncModule } from './pages/menu-func/menu-func.module'; // Importe o MenuFuncModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuClienteModule,  // Adicionei MenuClienteModule para o menu do cliente
    MenuFuncModule      // Adicionei MenuFuncModule para o menu do funcionário
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
