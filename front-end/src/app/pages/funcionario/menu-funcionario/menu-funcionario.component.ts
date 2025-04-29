import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';
import { HeaderFuncionarioComponent } from '../header-funcionario/header-funcionario.component';
import { VooService } from '../../../services/voo.service';
import { Voo } from '../../../models/voo.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalVerificarReservaComponent } from '../modal-verificar-reserva/modal-verificar-reserva.component';

@Component({
  selector: 'app-menu-funcionario',
  standalone: true,
  imports: [HeaderFuncionarioComponent],
  templateUrl: './menu-funcionario.component.html',
  styleUrl: './menu-funcionario.component.css',
})
export class MenuFuncionarioComponent implements OnInit {
 
  voos: Voo[] = [];

  constructor(private vooServiece : VooService,
    private modalService: NgbModal
  ) {}
  
  ngOnInit(): void {
    // array 'reservas'
    this.vooServiece.getVoos().subscribe((voos) => {
      this.voos = voos;
    });
  }

  confirmar(codigo_voo : number): void {
    console.log('codigo: ' +codigo_voo);
    this.abrirModal(codigo_voo, ModalVerificarReservaComponent)
    
  }

  cancelar(id : number) : void{

  }

  abrirModal(codigo_voo : number, componentModal: any) {
    const modalRef = this.modalService.open(componentModal);
     modalRef.componentInstance.codigo = codigo_voo;
  }
}
