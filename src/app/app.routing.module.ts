import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { QuizComponent } from './quiz/quiz.component';
import { ListagemJogadorComponent } from './listagem-jogador/listagem-jogador.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: ApresentacaoComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'jogadores', component: ListagemJogadorComponent },
    { path: '**', component: ApresentacaoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
