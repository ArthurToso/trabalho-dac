import { Component } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-menu-funcionario',
  standalone: true,
  imports: [],
  templateUrl: './menu-funcionario.component.html',
  styleUrl: './menu-funcionario.component.css',
})
export class MenuFuncionarioComponent {
  isMenuOpen: boolean = false; // Estado do menu responsiv
  reservas: any[] = []; // Declaração da propriedade 'reservas'

  constructor(
    private serviceReserva : ReservaService
  ) {
    // Inicialização do array 'reservas'
    this.serviceReserva.getReservas().subscribe(reservas =>{
      this.reservas = reservas
    });
    
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }
}
