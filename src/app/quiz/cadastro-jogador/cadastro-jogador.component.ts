import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IJogador } from '../../shared/models/index';
import { JogadorService } from '../../shared/services/jogador.service';

@Component({
  selector: 'cadastro-jogador',
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.css']
})
export class CadastroJogadorComponent implements OnInit {
  @Input()
  pontuacao = 0;

  formJogador: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: JogadorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formJogador = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      email: ['']
    });
  }

  salvarJogador() {
    const jogador: IJogador = { ...this.formJogador.value, pontuacao: this.pontuacao };
    this.service.salvar(jogador);
    this.router.navigate(['jogadores']);
  }
}
