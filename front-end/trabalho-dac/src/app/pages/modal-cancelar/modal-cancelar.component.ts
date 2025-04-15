import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './modal-cancelar.component.html',
  styleUrl: './modal-cancelar.component.css'
})
export class ModalCancelarComponent {
  @Input() reserva: any;
  
   constructor(public activeModal: NgbActiveModal) {}

   cancelarReserva(id: number):void{
    //adc logica para cancelar reserva
   }

}
