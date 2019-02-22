import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JogadorService } from '../shared/services';
import { SharedModule } from '../shared/shared.module';
import { CabecalhoModule } from './../shared/components';
import { CadastroJogadorModule } from './cadastro-jogador/cadastro-jogador.module';
import { ListagemComponent } from './listagem/listagem.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [CommonModule, CadastroJogadorModule, CabecalhoModule, SharedModule],
  declarations: [QuizComponent, ListagemComponent, PersonagemComponent],
  exports: [QuizComponent],
  providers: [JogadorService]
})
export class QuizModule {}
