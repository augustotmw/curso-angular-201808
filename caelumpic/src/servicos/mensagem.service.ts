
import { Injectable } from '@angular/core';

@Injectable()
export class MensagemServico {
    private _mensagem:String;

    constructor(mensagem:String) {
        this._mensagem = mensagem;
    }

    public get():String {
        return this._mensagem;
    }
}