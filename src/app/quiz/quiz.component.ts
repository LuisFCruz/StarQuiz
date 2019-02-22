import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../shared/services/personagem.service';
import { IPersonagem } from '../shared/models';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private todosPersonagens: IPersonagem[] = [];
  personagens: IPersonagem[] = [];
  pessoaDica: IPersonagem;
  mostrarDica = false;
  mostrarDadosJogador = false;
  total = 0;
  finalizado = false;
  loading = false;
  durationGame = 120;

  paginaAtual = 1;

  constructor(private service: PersonagemService) {}

  get startTimer() {
    return this.todosPersonagens.length > 0;
  }

  ngOnInit() {
    this.loading = true;
    this.service.getAll([1, 2, 3]).subscribe(personagens => {
      this.todosPersonagens = personagens;
      this.loading = false;
      this.atualizarPagina();
    });
  }

  pageChange(page: number) {
    this.paginaAtual = page;
    this.atualizarPagina();
  }

  atualizarPagina() {
    const inicio = (this.paginaAtual - 1) * 10;
    const fim = this.paginaAtual * 10;
    this.personagens = this.todosPersonagens.slice(inicio, fim);
  }

  responder(personagem: IPersonagem) {
    this.atualizarPersonagens(personagem);
  }

  abrirDica(personagem: IPersonagem) {
    this.atualizarPersonagens(personagem);
    this.pessoaDica = personagem;
    this.mostrarDica = true;
  }

  fecharModal(value: boolean) {
    this.mostrarDica = value;
    this.mostrarDadosJogador = value;
  }

  finalizarQuiz() {
    this.fecharModal(false);
    this.total = this.todosPersonagens
      .filter(per => per.estaRespondido)
      .reduce((aggr, { usouDica }) => aggr + (usouDica ? 5 : 10), 0);

    this.mostrarDadosJogador = true;
    this.finalizado = true;
  }

  private atualizarPersonagens(personagem: IPersonagem) {
    const index = this.todosPersonagens.findIndex(p => p.id === personagem.id);
    this.todosPersonagens.splice(index, 1, personagem);
    this.atualizarPagina();
  }
}
