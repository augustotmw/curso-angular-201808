import { Component, Input } from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {
    @Input() titulo:string = ''; //utiliza-se o decorator @Input para declarar que esta variável receberá dados externos, pois por padrão, 
    @Input() url:string = '';
    descricao:string = '';
    _id:string;
}