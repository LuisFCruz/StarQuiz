import { NgModule } from '@angular/core';
import { Routing } from '../app.routes'
import { CabecalhoComponent } from './cabecalho.component';
@NgModule({
    imports: [ Routing ],
    declarations: [ CabecalhoComponent ],
    exports: [ CabecalhoComponent ],
})
export class CabecalhoModule { }