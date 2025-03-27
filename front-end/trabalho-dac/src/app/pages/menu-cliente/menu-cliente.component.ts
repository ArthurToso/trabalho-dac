import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {
  saldoMilhas: number = 5000; // Exemplo de saldo em milhas
  reservas: any[] = []; // Declaração da propriedade 'reservas'

  isMenuOpen: boolean = false; // Estado do menu responsivo

  constructor() { }

  ngOnInit(): void {
    // Inicialização do array 'reservas'
    this.reservas = [
      {
        id: 1,
        dataHora: '2025-03-26 14:00',
        origem: 'Aeroporto Internacional de São Paulo',
        destino: 'Aeroporto Internacional do Rio de Janeiro',
        status: 'Reservado'
      },
      {
        id: 2,
        dataHora: '2025-03-20 10:00',
        origem: 'Aeroporto Internacional de Brasília',
        destino: 'Aeroporto Internacional de Salvador',
        status: 'Feito'
      },
      {
        id: 3,
        dataHora: '2025-03-15 08:00',
        origem: 'Aeroporto Internacional de Recife',
        destino: 'Aeroporto Internacional de Fortaleza',
        status: 'Cancelado'
      }
    ];
  }

  verReserva(id: number): void {
    console.log('Ver reserva:', id);
    // Implementar lógica para visualizar reserva (R04)
  }

  cancelarReserva(id: number): void {
    console.log('Cancelar reserva:', id);
    // Implementar lógica para cancelar reserva (R08)
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }
}
