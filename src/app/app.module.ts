import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';



import { Routing } from './app.routes'

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { QuizComponent } from './quiz/quiz.component';
import { PersonagemModule } from './personagem/personagem.module';
import { ListagemComponent } from './listagem/listagem.component';
import { ModalComponent } from './modal/modal.component';

import { PersonagemService } from './personagem/personagem.service';
import { CadastroJogadorModule } from './cadastroJogador/cadastro-jogador.module';
import { JogadorService } from './jogador/jogador.service';
import { ListagemJogadorModule } from './listagemJogador/listagem-jogador.module';
import { CabecalhoModule } from './cabecalho/cabecalho.module';

@NgModule({
    declarations: [
        AppComponent,
        ApresentacaoComponent,
        QuizComponent,
        ListagemComponent,
        ModalComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Routing,
        HttpModule,
        PersonagemModule,
        CadastroJogadorModule,
        ListagemJogadorModule,
        CabecalhoModule
    ],
    providers: [ PersonagemService, JogadorService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
