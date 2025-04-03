import { Component } from '@angular/core';

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

  constructor() {
    // Inicialização do array 'reservas'
    this.reservas = [
      {
        id: 1,
        dataHora: '2025-03-26 14:00',
        origem: 'Aeroporto Internacional de São Paulo',
        destino: 'Aeroporto Internacional do Rio de Janeiro',
        status: 'Reservado',
      },
      {
        id: 2,
        dataHora: '2025-03-20 10:00',
        origem: 'Aeroporto Internacional de Brasília',
        destino: 'Aeroporto Internacional de Salvador',
        status: 'Feito',
      },
      {
        id: 3,
        dataHora: '2025-03-15 08:00',
        origem: 'Aeroporto Internacional de Recife',
        destino: 'Aeroporto Internacional de Fortaleza',
        status: 'Cancelado',
      },
    ];
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }
}
