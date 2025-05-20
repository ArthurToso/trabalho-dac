import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalReservaComponent } from '../modal-reserva/modal-reserva.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCancelarComponent } from '../modal-cancelar/modal-cancelar.component';
import { Reserva } from '../../../models/reserva';
import { ReservaService } from '../../../services/reserva.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { ActivatedRoute, Router } from '@angular/router';



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

  user? : User;
  reservas: Reserva[] = [];
  id_user!: string;
 

  constructor(
    private modalService: NgbModal, 
    private serviceReserva: ReservaService, 
    private serviceUser: UserService,
    private route : ActivatedRoute,
    private router : Router
  
  ) {}

  ngOnInit(): void {
  this.id_user = this.route.snapshot.params['id'];
  // Verifique se o ID não é nulo
  if (this.id_user) {
  
    console.log("ID do usuário:", this.id_user);

    // Chama o serviço para obter os dados do usuário pelo ID
    this.serviceUser.getUserPorId(this.id_user).subscribe(user => {
      this.user = user;  // Agora você pode acessar as informações do usuário
      console.log('Usuário encontrado:', this.user);
    });

    // Chama o serviço para obter as reservas do usuário
    this.serviceReserva.getReservasPorUsuario(this.id_user).subscribe(reservas => {
      this.reservas = reservas;
      console.log('Reservas encontradas:', this.reservas);
    });
  } else {
    console.error('Usuário não encontrado no localStorage');
    // Se o ID não for encontrado, você pode redirecionar o usuário para a página de login
    this.router.navigate(['/login']);
  }
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

  abrirModal(reserva: any, componentModal: any) {
    const modalRef = this.modalService.open(componentModal);
    modalRef.componentInstance.reserva = reserva;
  }
}
