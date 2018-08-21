import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root', //nome da diretiva inserida para renderizar o componente principal
  templateUrl: './app.component.html', //html template do componente
  styleUrls: ['./app.component.css'] // lista de estilos do componente
})
export class AppComponent {
  title = 'Caelum Pic';
  subtitle = 'A Wolf Pack';
  fotos;
  
  constructor(http: HttpClient) {
    this.fotos = http.get('http://localhost:3000/v1/fotos');
    console.log(this.fotos);
  }
}
