import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Funcionario } from '../../../models/funcionario.model';
import { FuncionarioService } from '../../../services/funcionario.service';


@Component({
  selector: 'app-inserir-editar-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-editar-funcionario.component.html',
  styleUrl: './inserir-editar-funcionario.component.css'
})
export class InserirEditarFuncionarioComponent {

  @ViewChild('formFunc')formFunc! : NgForm;

  novoFunc : boolean = true;

  usuario : Funcionario = new Funcionario();

  id : string = "";
  loading : boolean = false;
  senhaAntiga : string = "";

  constructor(
    private funcService : FuncionarioService,
    private route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.usuario = new Funcionario();
    this.loading = false;

    this.id = this.route.snapshot.params['id'];

    

    this.novoFunc = !this.id;

    if(!this.novoFunc){
      this.funcService.buscarPorId(+this.id).subscribe(
        usuario => {
          console.log(this.usuario)
          this.usuario = usuario;
         
      });
    }

    
  }

 salvar() : void{

  this.loading = true;

  if(this.formFunc.form.valid){
    if(this.novoFunc){
      this.usuario.id = new Date().getTime().toString()
      this.funcService.inserir(this.usuario).subscribe(
        usuario => {
          this.loading = false;
          this.router.navigate(['/funcionario/listar']);
        }
      );
    }
    else{
      
      this.funcService.alterar(this.usuario).subscribe(
        usuario => {
          this.loading = false;
          this.router.navigate(["/funcionario/listar"]);
        }
      );
    }
  }

 }


}
