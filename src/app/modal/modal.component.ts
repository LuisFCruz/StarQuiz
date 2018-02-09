import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersonagemComponent } from '../personagem/personagem.component';

@Component({
	selector: 'modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input() titulo: string;
    @Output() fechar = new EventEmitter<boolean>();

    fecharModal() {
        this.fechar.emit(false);
    }
}