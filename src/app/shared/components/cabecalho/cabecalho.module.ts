import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CabecalhoComponent } from './cabecalho.component';

@NgModule({
  declarations: [CabecalhoComponent],
  exports: [CabecalhoComponent],
  imports: [CommonModule, RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CabecalhoModule {}
