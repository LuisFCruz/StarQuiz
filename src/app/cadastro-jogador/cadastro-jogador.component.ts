import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IJogador } from '../shared/models';
import { JogadorService } from '../shared/services';

@Component({
  selector: 'cadastro-jogador',
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.css']
})
export class CadastroJogadorComponent implements OnInit {
  @Input() pontuacao: number;
  model: IJogador;
  formJogador: FormGroup;

  constructor(
    fb: FormBuilder,
    private service: JogadorService,
    private router: Router
  ) {
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
