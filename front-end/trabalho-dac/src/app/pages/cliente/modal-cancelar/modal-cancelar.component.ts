import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservaService } from '../../../services/reserva.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-modal-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './modal-cancelar.component.html',
  styleUrl: './modal-cancelar.component.css',
})
export class ModalCancelarComponent {
  @Input() reserva: any;

  constructor(
    public activeModal: NgbActiveModal,
    private serviceReserva: ReservaService,
    private serviceUser: UserService
  ) {}

  cancelarReserva(id: number): void {
    //adc logica para cancelar reserva
    //no userservice retornar milhas para usuario da reserva cancelada
    //adc na reserva historico data/etc
  }
}
