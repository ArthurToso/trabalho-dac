import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-func',
  templateUrl: './menu-func.component.html',
  styleUrls: ['./menu-func.component.css']
})
export class MenuFuncComponent implements OnInit {
  isMenuOpen: boolean = false;  // Variável para controlar se o menu está aberto ou fechado

  constructor() { }

  ngOnInit(): void {
    // Você pode adicionar lógica para inicializar o menu se necessário
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;  // Alterna o estado do menu
  }
}
