import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { MensagemServico } from './mensagem.service';

@Injectable()
export class FotoService {
    private cabecalho = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    private url = 'http://localhost:3000/v1/fotos/';

    constructor(private http:HttpClient){ }


    listar():Observable<FotoComponent[]>{
        return this.http.get<FotoComponent[]>(this.url);
    }
    
    recuperar(id):Observable<FotoComponent> {
        return this.http.get<FotoComponent>(this.url+id);
    }

    cadastrar(foto:FotoComponent):Observable<MensagemServico> {
        return this.http.post(this.url, foto, this.cabecalho).pipe(
            // map(()=>({texto:`Foto ${foto.titulo} adicionada com sucesso!`, tipo: 'sucesso'}))
            map(()=> new MensagemServico(`Foto ${foto.titulo} adicionada com sucesso!`))
        );
    }

    deletar(foto:FotoComponent):Observable<MensagemServico> {
        return this.http.delete(this.url + foto._id).pipe(
            // map(()=>({texto:`Foto ${foto.titulo} removida com sucesso!`, tipo: 'sucesso'}))
            map(()=> new MensagemServico(`Foto ${foto.titulo} removida com sucesso!`))
        );
    }

    alterar(foto:FotoComponent):Observable<MensagemServico> {
        return this.http.put(this.url+foto._id, foto, this.cabecalho).pipe(
            // map(()=>({texto:`Foto ${foto.titulo} atualizada com sucesso!`, tipo: 'sucesso'}))
            map(()=> new MensagemServico(`Foto ${foto.titulo} atualizada com sucesso!`))
        );
    }
}

