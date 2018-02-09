import { Component } from '@angular/core';

@Component({
	selector: 'personagem',
	templateUrl: './personagem.component.html',
	styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {
	id: string;
	name: string;
	height: string;
	hair_color: string;
	skin_color: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	url: string;
	image: string;
	especies: string;
	planeta: string;
	filmes: string;
	veiculos: string;

	mostrarResponder: boolean = false;
	estaRespondido: boolean = false;
	pontos: number = 0;
	usouDica: boolean = false;
}