import { Routing } from '../app.routes'

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizComponent } from './quiz.component';
import { PersonagemModule } from '../personagem/personagem.module';
import { CadastroJogadorModule } from '../cadastroJogador/cadastro-jogador.module';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';

@NgModule({
    imports: [ 
        CommonModule,
        Routing, 
        PersonagemModule ,
        CadastroJogadorModule,
        CabecalhoModule,
    ],
    declarations: [ QuizComponent ],
    exports: [ QuizComponent ]
})
export class QuizModule { }