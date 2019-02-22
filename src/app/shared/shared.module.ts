import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoModule, ModalModule } from './components';
import { FieldTextModule } from './components/field-text/field-text.module';
import { PaginationModule } from './components/pagination/pagination.module';
import { TimerModule } from './components/timer/timer.module';

@NgModule({
  imports: [
    CommonModule,
    CabecalhoModule,
    FieldTextModule,
    ModalModule,
    PaginationModule,
    TimerModule
  ],
  exports: [
    CabecalhoModule,
    FieldTextModule,
    ModalModule,
    PaginationModule,
    TimerModule
  ]
})
export class SharedModule {}
