import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Funcionario } from '../../../models/funcionario.model';
import { FuncionarioService } from '../../../services/funcionario.service';
import { HeaderFuncionarioComponent } from "../header-funcionario/header-funcionario.component";

@Component({
  selector: 'app-listar-funcionario',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderFuncionarioComponent],
  templateUrl: './listar-funcionario.component.html',
  styleUrl: './listar-funcionario.component.css'
})
export class ListarFuncionarioComponent {


    funcionarios : Funcionario[] = [];

    funcionarioLogado = 'Nome'; //pegar esse dado qdo estiver autenticado !!! como???
  
    constructor(
      private funcService: FuncionarioService,
    
    ) {}
    ngOnInit(): void {
      this.listarTodos();
    }
  
    listarTodos(): Funcionario[] {
      this.funcService.listarTodos().subscribe({
        next: (data: Funcionario[]) => {
          if (data == null) {
            this.funcionarios = [];
          } else {
            this.funcionarios = data;
          }
        },
      });
      return this.funcionarios;
    }
  
    remover($event : any, user : Funcionario) : void{
      $event.preventDefault();
  
      if(confirm("Deseja remover funcionario " + user.nome)){
        this.funcService.remover(user).subscribe({
          complete : () => {this.listarTodos();}
        })
      }
  
    }
  
  
  }
  
