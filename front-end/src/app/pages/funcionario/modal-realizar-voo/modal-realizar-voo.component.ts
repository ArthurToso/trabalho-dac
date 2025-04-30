import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Voo } from '../../../models/voo.model';

@Component({
  selector: 'app-modal-realizar-voo',
  standalone: true,
  imports: [],
  templateUrl: './modal-realizar-voo.component.html',
  styleUrl: './modal-realizar-voo.component.css'
})
export class ModalRealizarVooComponent {

  voo: Voo = new Voo();

  constructor(
    private modal : NgbActiveModal
  ){}

  close() : void{
    this.modal.close();
  }

  confirmar() : void {
    //mudar status voo de CONFIRMANDO para REALIZADO
    //alterar a reserva de todos os clientes de EMBARCADO para REALIZADO e os cliente q nao EMBARCARAM para NAO REALIAZADA
    console.log("voo realizado: "+ this.voo.codigo_voo)

  }

}
