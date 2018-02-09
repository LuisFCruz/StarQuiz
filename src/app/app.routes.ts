import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { QuizComponent } from './quiz/quiz.component';
import { ListagemJogadorComponent } from './listagemJogador/listagem-jogador.component';

const appRoutes: Routes = [

    { path: '', component: ApresentacaoComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'jogadores', component: ListagemJogadorComponent },
    { path: '**', component: ApresentacaoComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);