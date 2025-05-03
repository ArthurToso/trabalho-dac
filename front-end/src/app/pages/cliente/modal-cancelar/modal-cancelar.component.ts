import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservaService } from '../../../services/reserva.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './modal-cancelar.component.html',
  styleUrl: './modal-cancelar.component.css',
})
export class ModalCancelarComponent {
  @Input() reserva: any;

  usuario: User = new User();

  constructor(
    public activeModal: NgbActiveModal,
    private serviceReserva: ReservaService,
    private serviceUser: UserService,
    private router : Router,
    
  ) {}

  cancelarReserva(id: number): void {
    //no userservice retornar milhas para usuario da reserva cancelada
    this.serviceUser.getUserPorId(this.reserva.id_user).subscribe(
      user => {
        console.log(user);
        console.log("reserva" + this.reserva)
        this.serviceUser
        .devolverMilhas(this.reserva.milhas, user)
        .subscribe(() => {
          //adc logica para cancelar reserva
          this.serviceReserva.cancelar(this.reserva).subscribe(() => {
            console.log('Reserva cancelada e milhas devolvidas');
          });
        });
        this.activeModal.close()
      })
    //adc na reserva historico data/etc
  }
}
