import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalReservaComponent } from '../modal-reserva/modal-reserva.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCancelarComponent } from '../modal-cancelar/modal-cancelar.component';
import { Reserva } from '../../../models/reserva';
import { ReservaService } from '../../../services/reserva.service';
import { UserService } from '../../../services/user.service';
import { error } from 'console';
import { User } from '../../../models/user';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";

@Component({
  selector: 'app-menu-cliente',
  standalone: true,
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css'],
  imports: [
    CommonModule,
    HeaderClienteComponent
],
})
export class MenuClienteComponent implements OnInit {
  
  reservas: Reserva[] = []; // Declaração da propriedade 'reservas'

  user!: User; //saldoMilhas obter do user
  
  id_user = 101; //trocar quando tiver autenticacao
  isMenuOpen: boolean = false; // Estado do menu responsivo

  reservaSelecionada: any = null;

  //para usar a biblioteca de modal
  constructor(private modalService: NgbModal, private serviceReserva : ReservaService, private serviceUser : UserService) {}

  ngOnInit(): void {

    this.serviceUser.getUserPorId(this.id_user).subscribe(user => {
      this.user = user;
    });

    this.serviceReserva.getReservasPorUsuario(this.id_user).subscribe(reservas =>{
      this.reservas = reservas
    });
  }

  verReserva(id: number): void {
    console.log('Ver reserva:', id);
    // Implementar lógica para visualizar reserva (R04)
    const reserva = this.reservas.find((r) => r.id === id);
    if (reserva) {
      this.abrirModal(reserva, ModalReservaComponent);
    }
  }

  cancelarReserva(id: number): void {
    console.log('Cancelar reserva:', id);
    // Implementar lógica para cancelar reserva (R08)
    const reserva = this.reservas.find((r) => r.id === id);
    if (reserva) {
      this.abrirModal(reserva, ModalCancelarComponent);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }

  abrirModal(reserva: any, componentModal: any) {
    const modalRef = this.modalService.open(componentModal);
    modalRef.componentInstance.reserva = reserva;
  }

}
