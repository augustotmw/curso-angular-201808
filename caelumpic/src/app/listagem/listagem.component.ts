import { Component } from '@angular/core';
import { FotoService } from '../../servicos/foto.service';
import { FotoComponent } from '../../foto/foto.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent  {
  title = 'Caelum Pic';
  subtitle = 'A Photo Collection';

  fotos;

  mensagem:String;

  constructor(private servico: FotoService) {
    servico.listar().subscribe(fotosApi => this.fotos = fotosApi, erro => console.log(erro));
  }

  remover(foto:FotoComponent):void {
    console.log('removendo...');

    this.servico.deletar(foto)
    .subscribe(()=>{
      console.log(`Foto ${foto.titulo} apagada com sucesso!`);
      this.mensagem = `Foto ${foto.titulo} apagada com sucesso!`;
      this.fotos = this.fotos.filter(f=>f._id !== foto._id);

      setTimeout(()=>this.mensagem='', 15000);
    }, erro=>console.log(erro));
  }

  // logica movida para foto.service.ts:
  
  // constructor(http: HttpClient) {
  //   http.get('http://localhost:3000/v1/fotos').subscribe(fotosApi => this.fotos = fotosApi, erro => console.log(erro));
  // }

}
