import { Component } from '@angular/core';
import { FotoService } from '../../servicos/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent  {
  title = 'Caelum Pic';
  subtitle = 'A Photo Collection';

  fotos;

  constructor(private servico: FotoService) {
    servico.listar().subscribe(fotosApi => this.fotos = fotosApi, erro => console.log(erro));
  }

  // logica movida para foto.service.ts:
  
  // constructor(http: HttpClient) {
  //   http.get('http://localhost:3000/v1/fotos').subscribe(fotosApi => this.fotos = fotosApi, erro => console.log(erro));
  // }

}
