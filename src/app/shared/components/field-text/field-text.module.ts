import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldTextComponent } from './field-text.component';

@NgModule({
  declarations: [FieldTextComponent],
  exports: [FieldTextComponent],
  imports: [CommonModule]
})
export class FieldTextModule {}
