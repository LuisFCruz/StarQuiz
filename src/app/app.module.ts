import { AppRoutingModule } from './app.routing.module';
import { ApresentacaoModule } from './apresentacao/apresentacao.module';
import { QuizModule } from './quiz/quiz.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PersonagemService } from './shared/services/personagem.service';
import { JogadorService } from './shared/services';
import { ListagemJogadorModule } from './listagem-jogador/listagem-jogador.module';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './shared/services/localStorage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ListagemJogadorModule,
    QuizModule,
    ApresentacaoModule
  ],
  providers: [
    PersonagemService,
    JogadorService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
