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
    // this.fotos = http.get('http://localhost:3000/v1/fotos');
    // console.log(this.fotos);
    
    /**
     * subscribe sem manter o contexto do "this"
     */
    // var that = this;
    // http.get('http://localhost:3000/v1/fotos').subscribe(function(fotosApi){
    //   console.log(typeof (fotosApi), fotosApi);

    //   // this.fotos = fotosApi; //não funciona pois o escopo é o da função do subscribe
    //   that.fotos = fotosApi;
    // });

     /**
     * subscribe mantendo o contexto do "this"
     * 
     * (passando dois callbacks, um em caso de sucesso e outro em caso de erro)
     */

    http.get('http://localhost:3000/v1/fotos').subscribe(fotosApi => this.fotos = fotosApi, erro => console.log(erro));
  }
}
