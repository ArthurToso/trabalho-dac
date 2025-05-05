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

  reservas: Reserva[] =[];

  mostrar = false;

  reserva = new Reserva()

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(r =>{
      this.reservas = r;
    })
    
  }

  consultar(codigo : string) : void{
    let res = this.reservas.find(r => r.codigo == codigo)
    if(res != undefined){
      this.reserva = res;
      this.mostrar = true
    }else{
      alert("Reserva não encontrada")
    }
    console.log(this.reservas)

  }
}
