import { Component } from '@angular/core';
import { HeaderFuncionarioComponent } from '../header-funcionario/header-funcionario.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inserir-voo',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderFuncionarioComponent],
  templateUrl: './inserir-voo.component.html',
  styleUrl: './inserir-voo.component.css'
})
export class InserirVooComponent {

}
