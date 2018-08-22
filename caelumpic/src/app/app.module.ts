import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule } from '../foto/foto.module';
import { PainelModule } from './painel/pianel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { router } from './app.routes';
import { Erro404Component } from './erro404/erro404.component';


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FotoModule,
    PainelModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
