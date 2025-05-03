import { Component, OnInit } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { CommonModule } from '@angular/common';
import { Milha } from '../../../models/milha.model';
import { MilhasService } from '../../../services/milhas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extrato-milhas',
  standalone: true,
  imports: [CommonModule, HeaderClienteComponent],
  templateUrl: './extrato-milhas.component.html',
  styleUrl: './extrato-milhas.component.css'
})
export class ExtratoMilhasComponent implements OnInit{
  

  milhas: Milha[] = [];


  id : string = ''

  constructor(private milhasService : MilhasService, private route : ActivatedRoute){}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];


    this.milhasService.getMilhasPorUsuario(101).subscribe(m => {
      this.milhas = m;
    });
  }

}
