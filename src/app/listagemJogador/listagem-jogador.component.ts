import { Component } from '@angular/core';
import { JogadorComponent } from '../jogador/jogador.component';
import { JogadorService } from '../jogador/jogador.service';

@Component({
	selector: 'listagem-jogador',
	templateUrl: './listagem-jogador.component.html',
	styleUrls: ['./listagem-jogador.component.css']
})
export class ListagemJogadorComponent {
    service: JogadorService;
    jogadores: JogadorComponent[];

   constructor(service: JogadorService) {
        this.service = service;
        this.jogadores = this.service.listar();
   }
}