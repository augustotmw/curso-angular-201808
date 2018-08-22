import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent  {
  title = 'Caelum Pic';
  subtitle = 'A Photo Collection';

  fotos;
  
  constructor(http: HttpClient) {
    http.get('http://localhost:3000/v1/fotos').subscribe(fotosApi => this.fotos = fotosApi, erro => console.log(erro));
  }

}
