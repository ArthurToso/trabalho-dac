import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`, // Adicione o router-outlet aqui
  standalone: true,
  imports: [RouterModule] // Importe o RouterModule
})
export class AppComponent { }
