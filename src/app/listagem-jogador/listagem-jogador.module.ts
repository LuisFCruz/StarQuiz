import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemJogadorComponent } from './listagem-jogador.component';
import { CabecalhoModule } from '../shared/components';

@NgModule({
    imports: [ 
        CommonModule,
        CabecalhoModule,
    ],
    declarations: [ ListagemJogadorComponent ],
    exports: [ ListagemJogadorComponent ]
})
export class ListagemJogadorModule { }