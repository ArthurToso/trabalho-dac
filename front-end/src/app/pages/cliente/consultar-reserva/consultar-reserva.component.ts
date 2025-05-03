import { Component, OnInit } from '@angular/core';
import { HeaderClienteComponent } from '../header-cliente/header-cliente.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva';

@Component({
  selector: 'app-consultar-reserva',
  standalone: true,
  imports: [HeaderClienteComponent, CommonModule, FormsModule],
  templateUrl: './consultar-reserva.component.html',
  styleUrl: './consultar-reserva.component.css',
})
export class ConsultarReservaComponent implements OnInit {
  codigoReserva: string = '';

  reserva: Reserva = new Reserva();

  mostrar = false;

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    
  }

  consultar(id : string) : void{
    this.reservaService.getReserva(id).subscribe(r =>{
      this.reserva = r[0];
      this.mostrar = true
      console.log(r)
    })
  }
}
