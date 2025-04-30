import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';
import { HeaderFuncionarioComponent } from '../header-funcionario/header-funcionario.component';
import { VooService } from '../../../services/voo.service';
import { Voo } from '../../../models/voo.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalVerificarReservaComponent } from '../modal-verificar-reserva/modal-verificar-reserva.component';
import { ModalCancelarComponent } from '../modal-cancelar/modal-cancelar.component';
import { ModalRealizarVooComponent } from '../modal-realizar-voo/modal-realizar-voo.component';

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

  confirmar(voo : Voo): void {
    const voo_local = this.voos.find((v) => v.id === voo.id);
    this.abrirModal(voo, ModalVerificarReservaComponent)
    
  }

  realizar(voo : Voo) : void{
    if(voo != undefined){
      this.abrirModal(voo, ModalRealizarVooComponent)
    }
  }

  cancelar(voo : Voo) : void{

    const voo_local = this.voos.find((v) => v.id === voo.id);
    console.log(voo_local)
    if(voo_local){
      this.abrirModal(voo_local, ModalCancelarComponent)
      console.log("deu certo")
      
    }else{
      console.log("erro: "+ voo_local)
    }

  }

  abrirModal(voo : Voo, componentModal: any) {
    const modalRef = this.modalService.open(componentModal);
     modalRef.componentInstance.voo = voo;
  }
}
