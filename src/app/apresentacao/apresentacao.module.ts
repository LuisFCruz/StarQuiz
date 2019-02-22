import { RouterModule } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ApresentacaoComponent ],
  exports: [ApresentacaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class ApresentacaoModule { }
