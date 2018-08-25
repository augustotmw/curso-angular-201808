import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoComponent } from '../../foto/foto.component';
import { FotoService } from '../../servicos/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pg-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent { 
  foto:FotoComponent = new FotoComponent();
  mensagem:String;
  // http:HttpClient;
  formCadastro:FormGroup;

  constructor(
    private servico:FotoService, 
    private rota:ActivatedRoute, 
    private roteador:Router, 
    private formBuilder:FormBuilder){
    // this.foto.titulo = "teste";
    // this.foto.url = "bar";
    // this.http = http;

    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      url: ['', Validators.required],
      descricao: ''
    });

    // forma longa:

    // this.rota.params.subscribe(parametros=>{
    //   if(parametros.idFoto) { //parametros.idFoto referencia ao nome do parametro colocado na configuração da rota
    //     this.servico.recuperar(parametros.idFoto).subscribe(fotoDaApi=>this.foto = fotoDaApi);
    //   }
    // });

    // forma curta:

    if(this.rota.snapshot.params.idFoto) { //this.rota.snapshot.params.idFoto referencia ao nome do parametro colocado na configuração da rota
      this.servico.recuperar(this.rota.snapshot.params.idFoto).subscribe(fotoDaApi=>{
        this.foto = fotoDaApi;
        
        // para vincularmos os campos nas variáveis sem utilizar [(ngModel)]="<variavel>" podemos:
        
        // maneira longa:
        // this.formCadastro.get('titulo').setValue(fotoDaApi.titulo);
        // this.formCadastro.get('url').setValue(fotoDaApi.url);
        // this.formCadastro.get('descricao').setValue(fotoDaApi.descricao);

        // maneira curta
        this.formCadastro.patchValue(fotoDaApi);
      });
    }
  }

  /** utilizando (submit)="salvar($event)" no <form> */
  // salvar(ev:Event){
  //   ev.preventDefault();
  //   console.log(this.foto);
  // }

  /** utilizando (ngSubmit)="salvar()" no <form> */

  salvar() {
    console.log('foto antes: ');
    console.table(this.foto);

    //this.foto = this.formCadastro.value; //perde a referencia do this.foto._id
    // logo devemos atribuir assim:

    this.foto = {...this.foto, ...this.formCadastro.value};

    console.log('foto depois: ');
    console.table(this.foto);

    if(this.foto._id) {

      this.servico.alterar(this.foto).subscribe((mensagemServico) => {
        // this.mensagem = `Foto ${this.foto.titulo} editada com sucesso!`;
        // mensagemServico.mensagem = 'Mensagem adulterada'; //erro de propriedade privada à classe
        // this.mensagem = mensagemServico.mensagem; //propriedade privada "mensagem" não é mais visível no "mensagemServico"
        this.mensagem = mensagemServico.get();
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
      .subscribe((mensagemServico)=> {
        this.foto = new FotoComponent();
        this.formCadastro.patchValue(this.foto);
        this.formCadastro.reset();
          // this.mensagem = `Foto ${this.foto.titulo} adicionada com sucesso! Redirecionando para a tela de listagem...`;
          // this.mensagem = mensagemServico.mensagem; //propriedade privada "mensagem" não é mais visível no "mensagemServico"
        this.mensagem = mensagemServico.get();
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
