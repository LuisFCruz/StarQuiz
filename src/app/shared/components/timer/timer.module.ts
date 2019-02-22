import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';

@NgModule({
  declarations: [TimerComponent],
  exports: [TimerComponent],
  imports: [CommonModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class TimerModule {}
