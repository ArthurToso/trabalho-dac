import { Component, ViewChild } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-comprar-milhas',
  standalone: true,
  imports: [HeaderClienteComponent, CommonModule, FormsModule],
  templateUrl: './comprar-milhas.component.html',
  styleUrl: './comprar-milhas.component.css'
})
export class ComprarMilhasComponent {

  @ViewChild('formMilhas')formMilhas! : NgForm;

   valor : number = 0;

   milhasCalculadas = this.valor/5;
   
   constructor(){}

   comprarMilhas() : void{
    // Todas as transações de compra de milhas devem ser registradas: 
    // data/hora, valor em reais, quantidade de milhas compradas e uma descrição "COMPRA DE MILHAS";

   }


}
