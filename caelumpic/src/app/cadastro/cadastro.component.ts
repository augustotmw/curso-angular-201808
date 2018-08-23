import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoComponent } from '../../foto/foto.component';

@Component({
  selector: 'pg-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent { 
  foto:Object = new FotoComponent();
  http:HttpClient;

  constructor(http:HttpClient){
    // this.foto.titulo = "teste";
    // this.foto.url = "bar";
    this.http = http;
  }

  /** utilizando (submit)="salvar($event)" no <form> */
  // salvar(ev:Event){
  //   ev.preventDefault();
  //   console.log(this.foto);
  // }

  /** utilizando (ngSubmit)="salvar()" no <form> */

  salvar() {
    console.log('foto: ', this.foto);
    console.log('http: ', this.http);

    let configReq = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    }


    this.http.post('http://localhost:3000/v1/fotos', this.foto, configReq)
    .subscribe(()=> {
        alert(`Foto ${ this.foto.titulo } salva com sucesso!`);
        this.foto = new FotoComponent();
      },
    erro => alert(`Ocorreu um problema ao carregar a foto ${ this.foto.titulo }.`));
  }
}
