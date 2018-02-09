import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'jogador',
	templateUrl: './jogador.component.html',
	styleUrls: ['./jogador.component.css']
})
export class JogadorComponent {
    nome: string;
    email: string;
    pontuacao: number;
}