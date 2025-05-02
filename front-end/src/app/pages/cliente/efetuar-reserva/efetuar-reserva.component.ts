import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Voo } from '../../../models/voo.model';
import { VooService } from '../../../services/voo.service';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";

@Component({
  selector: 'app-efetuar-reserva',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderClienteComponent],
  templateUrl: './efetuar-reserva.component.html',
  styleUrl: './efetuar-reserva.component.css'
})
export class EfetuarReservaComponent implements OnInit {

  origem : string = ''
  destino : string = ''

  voos : Voo[] = []

  constructor(private vooService : VooService){}


  ngOnInit(): void {
   
    this.vooService.getVoos().subscribe(v =>{
      this.voos = v;
    })
  }

  

  selecionarVoo( voo : Voo): void{
    alert("Implementar metodo! :D")
  }

}
