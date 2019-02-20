import { FormsModule } from '@angular/forms';
import { ListagemComponent } from './listagem/listagem.component';
import { ModalModule } from './../shared/components/modal/modal.module';
import { CadastroJogadorComponent } from './../cadastro-jogador/cadastro-jogador.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabecalhoModule } from './../shared/components';
import { QuizComponent } from './quiz.component';
import { JogadorService } from '../shared/services';
import { TimerModule } from '../shared/components/timer/timer.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    CabecalhoModule,
    ModalModule,
    FormsModule,
    TimerModule,
    PaginationModule,
  ],
  declarations: [QuizComponent, CadastroJogadorComponent, ListagemComponent],
  exports: [QuizComponent],
  providers: [JogadorService]
})
export class QuizModule {}
