import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Voo } from '../../../models/voo.model';
import { VooService } from '../../../services/voo.service';

@Component({
  selector: 'app-modal-cancelar',
  standalone: true,
  imports: [],
  templateUrl: './modal-cancelar.component.html',
  styleUrl: './modal-cancelar.component.css'
})
export class ModalCancelarComponent {

  @Input() dado_voo: any;

  voo: Voo = new Voo();

  constructor(
    private modal : NgbActiveModal,
    private vooService : VooService
  ){}
  
  close() : void{
    this.modal.close()
  }
  //funcao para Cancelar voo 
  cancelar() : void {}
}
