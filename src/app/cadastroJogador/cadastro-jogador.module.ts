import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CadastroJogadorComponent } from './cadastro-jogador.component';

@NgModule({
    imports: [ 
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ CadastroJogadorComponent ],
    exports: [ CadastroJogadorComponent ],
    providers: [ ]
})
export class CadastroJogadorModule { }