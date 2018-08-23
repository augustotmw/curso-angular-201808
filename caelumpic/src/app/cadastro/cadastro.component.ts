import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoComponent } from '../../foto/foto.component';
import { FotoService } from '../../servicos/foto.service';

@Component({
  selector: 'pg-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent { 
  foto:FotoComponent = new FotoComponent();
  mensagem:String;
  // http:HttpClient;

  constructor(private servico:FotoService, private rota:ActivatedRoute, private roteador:Router){
    // this.foto.titulo = "teste";
    // this.foto.url = "bar";
    // this.http = http;

    // forma longa:

    // this.rota.params.subscribe(parametros=>{
    //   if(parametros.idFoto) { //parametros.idFoto referencia ao nome do parametro colocado na configuração da rota
    //     this.servico.recuperar(parametros.idFoto).subscribe(fotoDaApi=>this.foto = fotoDaApi);
    //   }
    // });

    // forma curta:

    if(this.rota.snapshot.params.idFoto) { //this.rota.snapshot.params.idFoto referencia ao nome do parametro colocado na configuração da rota
      this.servico.recuperar(this.rota.snapshot.params.idFoto).subscribe(fotoDaApi=>this.foto = fotoDaApi);
    }
  }

  /** utilizando (submit)="salvar($event)" no <form> */
  // salvar(ev:Event){
  //   ev.preventDefault();
  //   console.log(this.foto);
  // }

  /** utilizando (ngSubmit)="salvar()" no <form> */

  salvar() {
    console.log('foto: ', this.foto);

    if(this.foto._id) {

      this.servico.alterar(this.foto).subscribe(()=> {
        this.mensagem = `Foto ${this.foto.titulo} editada com sucesso!`;
        scrollTo(0,0);
        setTimeout(()=>{
          this.mensagem='';
          if(confirm("Deseja voltar para a listagem?")) {
            this.roteador.navigate(['']); // Utilizando o Router
          }
        }, 3000);
        
      },
    erro => alert(`Ocorreu um problema ao cadastrar a foto.`));

    } else {

      this.servico.cadastrar(this.foto)
      .subscribe(()=> {
          this.foto = new FotoComponent();
          this.mensagem = `Foto ${this.foto.titulo} adicionada com sucesso! Redirecionando para a tela de listagem...`;
          scrollTo(0,0);
          setTimeout(()=>{
            this.mensagem='';
            if(confirm("Deseja voltar para a listagem?")) {
              this.roteador.navigate(['']); // Utilizando o Router
            }
          }, 3000);
          
        },
      erro => alert(`Ocorreu um problema ao cadastrar a foto.`));

    }
    

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
