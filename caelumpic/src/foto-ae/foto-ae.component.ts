import { Component, Input } from '@angular/core';

@Component({
    selector: 'foto-ae',
    templateUrl: './foto-ae.component.html'
})
export class FotoAEComponent {
    @Input() titulo; //utiliza-se o decorator @Input para declarar que esta variável receberá dados externos, pois por padrão, 
    @Input() url;
}