import { Component } from '@angular/core';
import { IJogador } from '../shared/models';
import { JogadorService } from '../shared/services';

@Component({
	selector: 'listagem-jogador',
	templateUrl: './listagem-jogador.component.html',
	styleUrls: ['./listagem-jogador.component.css']
})
export class ListagemJogadorComponent {
    jogadores: IJogador[];

   constructor(private service: JogadorService) {
        this.service = service;
        this.jogadores = this.service.listar();
   }
}