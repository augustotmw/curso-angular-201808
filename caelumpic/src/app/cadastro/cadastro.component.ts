import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoComponent } from '../../foto/foto.component';
import { FotoService } from '../../servicos/foto.service';

@Component({
  selector: 'pg-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent { 
  foto:FotoComponent = new FotoComponent();
  // http:HttpClient;

  constructor(private servico:FotoService){
    // this.foto.titulo = "teste";
    // this.foto.url = "bar";
    // this.http = http;
  }

  /** utilizando (submit)="salvar($event)" no <form> */
  // salvar(ev:Event){
  //   ev.preventDefault();
  //   console.log(this.foto);
  // }

  /** utilizando (ngSubmit)="salvar()" no <form> */

  salvar() {
    console.log('foto: ', this.foto);
    
    this.servico.cadastrar(this.foto)
    .subscribe(()=> {
        alert(`Foto salva com sucesso!`);
        this.foto = new FotoComponent();
      },
    erro => alert(`Ocorreu um problema ao carregar a foto.`));

    // a logica abaixo foi movida para foto.service.ts
    // console.log('http: ', this.http);

    // let configReq = {
    //   headers: new HttpHeaders({'Content-Type': 'application/json'})
    // }

    // this.http.post('http://localhost:3000/v1/fotos', this.foto, configReq)
    // .subscribe(()=> {
    //     alert(`Foto salva com sucesso!`);
    //     this.foto = new FotoComponent();
    //   },
    // erro => alert(`Ocorreu um problema ao carregar a foto.`));
  }
}
