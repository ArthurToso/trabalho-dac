import { Component, OnInit } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { CommonModule } from '@angular/common';
import { Voo } from '../../../models/voo.model';
import { VooService } from '../../../services/voo.service';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [HeaderClienteComponent, CommonModule],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.css'
})
export class CheckInComponent implements OnInit{

  constructor(private vooService : VooService){

  }
  ngOnInit(): void {
    this.vooService.getVoos().subscribe(
      v => this.voos = v

    )
  }

  voos : Voo[] = []

  fazerCheckin(voo : Voo): void{}

}
