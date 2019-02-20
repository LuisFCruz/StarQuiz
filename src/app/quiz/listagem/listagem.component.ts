import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPersonagem } from '../../shared/models';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  @Input() pessoa: IPersonagem;
  @Input() finalizado: boolean;
  @Output() eventoDica = new EventEmitter<IPersonagem>();
  nome = '';
  mensagem = '';
  usouDica = false;

  responder() {
    if (this.nome.toLowerCase() == this.pessoa.name.toLowerCase()) {
      this.pessoa.pontos = this.usouDica ? 5 : 10;
      this.pessoa.estaRespondido = true;
    } else {
      this.mensagem = 'Errado';
      this.nome = '';
      setTimeout(() => (this.mensagem = ''), 1000);
    }
  }

  verDica() {
    this.eventoDica.emit(this.pessoa);
    this.usouDica = true;
  }
}
