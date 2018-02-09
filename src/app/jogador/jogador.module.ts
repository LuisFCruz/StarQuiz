import { NgModule } from '@angular/core';
import { JogadorComponent } from './jogador.component';
import { JogadorService } from './jogador.service';

@NgModule({
    declarations: [ JogadorComponent ],
    exports: [ JogadorComponent ],
    providers: [ JogadorService ]
})
export class JogadorModule { }