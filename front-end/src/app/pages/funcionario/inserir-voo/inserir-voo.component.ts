import { Component, ViewChild } from '@angular/core';
import { HeaderFuncionarioComponent } from '../header-funcionario/header-funcionario.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Voo } from '../../../models/voo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-voo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderFuncionarioComponent,
    FormsModule,
  ],
  templateUrl: './inserir-voo.component.html',
  styleUrl: './inserir-voo.component.css',
})
export class InserirVooComponent {
  @ViewChild('formVoo') formVoo!: NgForm;

  voo: Voo = new Voo();
  aeroportos = [
    'GRU - São Paulo',
    'GIG - Rio de Janeiro',
    'CNF - Belo Horizonte',
    'SSA - Salvador',
    'POA - Porto Alegre',
    'CWB - Curitiba'
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}

  salvar(): void {}
}
