
import { Injectable } from '@angular/core';

@Injectable()
export class MensagemServico {
    private mensagem:String;

    constructor(mensagem:String) {
        this.mensagem = mensagem;
    }

    public get():String {
        return this.mensagem;
    }
}