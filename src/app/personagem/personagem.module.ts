import { NgModule } from '@angular/core';
import { PersonagemComponent } from './personagem.component';
import { PersonagemService } from './personagem.service';

@NgModule({
    declarations: [ PersonagemComponent ],
    exports: [ PersonagemComponent ],
    providers: [ PersonagemService ]
})
export class PersonagemModule { }