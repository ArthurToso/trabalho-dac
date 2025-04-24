import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-reserva.component.html',
  styleUrl: './modal-reserva.component.css'
})
export class ModalReservaComponent {
  @Input() reserva: any;

 constructor(public activeModal: NgbActiveModal) {}

}
