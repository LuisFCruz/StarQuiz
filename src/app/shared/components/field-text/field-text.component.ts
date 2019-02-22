import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.css']
})
export class FieldTextComponent {
  @Input()
  label = '';

  @Input()
  disabled = false;

  @Output()
  confirm = new EventEmitter<{ value: string}>();

  value = null;

  inputChange(event) {
    const { value } = event.target;
    this.value = value;
  }

  confirmClick() {
    this.confirm.emit({ value: this.value });
  }
}
