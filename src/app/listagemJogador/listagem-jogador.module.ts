import { Routing } from '../app.routes'

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemJogadorComponent } from './listagem-jogador.component';
import { JogadorModule } from '../jogador/jogador.module';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';

@NgModule({
    imports: [ 
        CommonModule,
        Routing, 
        JogadorModule,
        CabecalhoModule,
    ],
    declarations: [ ListagemJogadorComponent ],
    exports: [ ListagemJogadorComponent ]
})
export class ListagemJogadorModule { }