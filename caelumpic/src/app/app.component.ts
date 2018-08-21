import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nome da diretiva inserida para renderizar o componente principal
  templateUrl: './app.component.html', //html template do componente
  styleUrls: ['./app.component.css'] // lista de estilos do componente
})
export class AppComponent {
  title = 'Caelum Pic';
  subtitle = 'A Wolf Pack';
}
