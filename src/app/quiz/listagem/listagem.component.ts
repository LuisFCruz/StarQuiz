import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPersonagem } from '../../shared/models';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  @Input()
  pessoa: IPersonagem;
  @Input()
  personagens: IPersonagem[];
  @Input()
  disabled: boolean;

  @Output()
  helper = new EventEmitter<IPersonagem>();

  @Output()
  answer = new EventEmitter<IPersonagem>();

  nome = '';
  mensagem = '';
  usouDica = false;

  responder(personagem: IPersonagem) {
    this.answer.emit(personagem);
  }

  verDica(personagem: IPersonagem) {
    this.helper.emit(personagem);
  }
}
