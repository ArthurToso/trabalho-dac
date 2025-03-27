import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuClienteModule } from './pages/menu-cliente/menu-cliente.module'; // Importe o módulo

@NgModule({
  declarations: [
    AppComponent // Componente principal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuClienteModule // Importe o MenuClienteModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
