import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css'],
    encapsulation: ViewEncapsulation.Emulated //valor padrão: ViewEncapsulation.Emulated (ShadowDOM emulado pelo Angular) outras opcoes: ViewEncapsulation.Native (para implementacao nativa do ShadowDOM) ViewEncapsulation.None (para nenhuma implementacao do ShadowDOM)
})
export class FotoComponent {
    @Input() titulo:string = ''; //utiliza-se o decorator @Input para declarar que esta variável receberá dados externos, pois por padrão, 
    @Input() url:string = '';
    descricao:string = '';
    _id:string;
}