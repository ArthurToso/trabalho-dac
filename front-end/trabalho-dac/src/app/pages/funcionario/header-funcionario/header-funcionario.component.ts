import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header-funcionario',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-funcionario.component.html',
  styleUrl: './header-funcionario.component.css'
})
export class HeaderFuncionarioComponent {
  @Input() nomeFuncionario: string = '';

}
