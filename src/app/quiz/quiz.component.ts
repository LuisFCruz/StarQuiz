import { Component, OnInit } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { PersonagemService } from '../shared/services/personagem.service';
import { IPersonagem } from '../shared/models';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private service: PersonagemService;
  private todosPersonagens: IPersonagem[] = [];
  paginaAtual: number = 1;
  paginaInicio: number = 0;
  paginaFim: number = 10;
  time: string;
  personagens: IPersonagem[] = [];
  pessoaDica: IPersonagem;
  mostrarDica: boolean = false;
  mostrarDadosJogador: boolean = false;
  total = 0;
  finalizado: boolean = false;
  loading: boolean = false;
  durationGame = 120;

  constructor(service: PersonagemService) {
    this.service = service;
    this.time = '02:00';
  }

  get startTimer() {
    return this.todosPersonagens.length > 0;
  }

  async ngOnInit() {
    await this.buscarPersonagens();
  }

  finalizarQuiz() {
    this.total = 0;
    let pessoas = this.todosPersonagens.filter(
      personagem => personagem.estaRespondido
    );
    pessoas.map(a => (this.total += a.pontos));
    this.mostrarDadosJogador = true;
    this.finalizado = true;
  }

  goToPrev() {
    this.paginaAtual -= 1;
    this.mostrarPersonagens();
  }

  goToNext() {
    this.paginaAtual += 1;

    if (this.todosPersonagens.length <= this.paginaAtual * 10)
      this.buscarPersonagens();
    else this.mostrarPersonagens();
  }

  async buscarPersonagens() {
    this.loading = true;
    this.personagens = await this.service.lista(this.paginaAtual);
    this.todosPersonagens = [].concat(this.todosPersonagens, this.personagens);
    this.loading = false;
  }

  mostrarPersonagens() {
    let indiceFinal = this.paginaAtual * 10;
    let indiceInicio = indiceFinal - 10;

    this.personagens = this.todosPersonagens.slice(indiceInicio, indiceFinal);
  }

  async abrirDica(pessoa: IPersonagem) {
    this.loading = true;
    await this.buscarComplementos(pessoa);
    this.pessoaDica = pessoa;
    this.mostrarDica = true;
    this.pessoaDica.usouDica = true;
    this.loading = false;
  }

  fecharModal(value: boolean) {
    this.mostrarDica = value;
    this.mostrarDadosJogador = value;
  }

  private async buscarComplementos(pessoa: IPersonagem) {
    return new Promise<boolean>(async resolve => {
      const especies = this.service.complementos(pessoa.species, 'name');
      const planeta = this.service.complementoNome(pessoa.homeworld, 'name');
      const filmes = this.service.complementos(pessoa.films, 'title');
      const veiculos = this.service.complementos(pessoa.vehicles, 'name');

      pessoa.especies = await especies;
      pessoa.planeta = await planeta;
      pessoa.filmes = await filmes;
      pessoa.veiculos = await veiculos;
      resolve(true);
    });
  }
}
