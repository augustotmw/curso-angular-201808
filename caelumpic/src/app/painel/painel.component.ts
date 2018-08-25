import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {
    @Input() titulo: String;

    ngOnInit() {
        this.titulo = this.titulo.length > 8 ?
            this.titulo.substr(0,8) + '...' :
            this.titulo;
    }
}