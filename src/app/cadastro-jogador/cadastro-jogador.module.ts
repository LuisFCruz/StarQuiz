import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CadastroJogadorComponent } from './cadastro-jogador.component';
import { JogadorService } from '../shared/services';

@NgModule({
    imports: [ 
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ CadastroJogadorComponent ],
    exports: [ CadastroJogadorComponent ],
    providers: [ JogadorService ]
})
export class CadastroJogadorModule { }