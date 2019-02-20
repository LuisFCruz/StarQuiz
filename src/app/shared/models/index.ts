export interface IJogador {
    nome: string;
    email: string;
    pontuacao: number;
};

export interface IPersonagem {
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

	mostrarResponder: boolean;
	estaRespondido: boolean;
	pontos: number;
	usouDica: boolean;
}