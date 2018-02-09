import { Injectable } from '@angular/core';
import { JogadorComponent } from './jogador.component';

@Injectable()
export class JogadorService {
    storage = localStorage;
    
    salvar(jogador: JogadorComponent) {
        let listaJogadores = this.listar();
        listaJogadores.push(jogador);
        this.storage.setItem("jogadores", JSON.stringify(listaJogadores));
    }

    listar() : JogadorComponent[] {
        let jogadores = []; 
        let jogadoresString = this.storage.getItem("jogadores");
        if (jogadoresString) jogadores = JSON.parse(jogadoresString);
        return jogadores;
    }
}