import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroTitulo } from './foto.pipes';

@NgModule({
    declarations: [FotoComponent, FiltroTitulo],
    exports: [FotoComponent, FiltroTitulo]
})
export class FotoModule {
    
}