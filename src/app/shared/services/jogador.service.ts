import { Injectable } from '@angular/core';
import { IJogador } from '../models';

@Injectable()
export class JogadorService {
    storage = localStorage;
    
    salvar(jogador: IJogador) {
        let listaJogadores = this.listar();
        listaJogadores.push(jogador);
        this.storage.setItem("jogadores", JSON.stringify(listaJogadores));
    }

    listar() : IJogador[] {
        let jogadores = []; 
        let jogadoresString = this.storage.getItem("jogadores");
        if (jogadoresString) jogadores = JSON.parse(jogadoresString);
        return jogadores;
    }
}