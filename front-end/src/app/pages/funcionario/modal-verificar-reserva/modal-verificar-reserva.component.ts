import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-verificar-reserva',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-verificar-reserva.component.html',
  styleUrl: './modal-verificar-reserva.component.css'
})
export class ModalVerificarReservaComponent {

    @ViewChild('formCod')formCod! : NgForm;
    @Input() codigo_voo : number = 0;
    codigo_reserva?: number;
    constructor(
      public activeModal: NgbActiveModal,
    ){}

    verificar(id : number) : void{
      console.log("codigo da reserva: "+id)

      if(this.codigo_reserva == this.codigo_voo){
        console.log("codigo de ambos iguais!!!")
      }else{
        console.log("nao sao")
      }

    }
}
