export interface IJogador {
  nome: string;
  email: string;
  pontuacao: number;
}

export interface IPersonagem {
  id: string;
  nome: string;
  altura: string;
  corCabelo: string;
  corPele: string;
  especies: string;
  planeta: string;
  filmes: string;
  veiculos: string;

  estaRespondido: boolean;
  usouDica: boolean;
}
