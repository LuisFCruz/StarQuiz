import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JogadorComponent } from '../jogador/jogador.component';
import { JogadorService } from '../jogador/jogador.service';
import { Router } from '@angular/router';

@Component({
	selector: 'cadastro-jogador',
	templateUrl: './cadastro-jogador.component.html',
	styleUrls: ['./cadastro-jogador.component.css']
})
export class CadastroJogadorComponent implements OnInit {
    private service;
    private router: Router;
    @Input() pontuacao: number;
    model: JogadorComponent = new JogadorComponent();
    formJogador: FormGroup;

    constructor(service: JogadorService, fb: FormBuilder, router:Router) {
        this.service = service;
        this.router = router;

        this.formJogador = fb.group({
            nome: ['', Validators.compose([Validators.required])],
            email: ['']
        });
    }

    ngOnInit() {
        this.model.pontuacao = this.pontuacao;
    }

    salvarJogador() {
        this.service.salvar(this.model);
        this.router.navigate(['jogadores']);
    }
}