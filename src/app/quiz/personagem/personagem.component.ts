import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IPersonagem } from '../../shared/models';

@Component({
  selector: 'personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  @Input()
  pessoa: IPersonagem;

  @Input()
  disabled = false;

  @Output()
  confirm = new EventEmitter<IPersonagem>();

  @Output()
  helper = new EventEmitter<IPersonagem>();

  responder = false;
  mensagem = null;

  get imagem() {
    if (this.pessoa) {
      return `./assets/images/personagens/${this.pessoa.id}.jpg`;
    }

    return '';
  }

  ngOnInit() {
    if (this.pessoa.estaRespondido) {
      this.mensagem = 'Certo';
    }
  }

  confirmarResposta(name: { value: string }) {
    const pessoa = this.pessoa;
    if (name.value.toUpperCase() === pessoa.nome.toUpperCase()) {
      pessoa.estaRespondido = true;
      this.confirm.emit({ ...pessoa });
      this.mensagem = 'Certo';
      this.responder = false;
    } else {
      this.mensagem = 'Errado';
    }
  }

  mostrarResponder() {
    this.responder = true;
  }

  mostrarDica() {
    const pessoa = this.pessoa;
    this.helper.emit({ ...pessoa, usouDica: true });
  }
}
