import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule } from '../foto/foto.module';
import { FotoAEModule } from '../foto-ae/foto-ae.module';
import { PainelModule } from './painel/pianel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { router } from './app.routes';
import { Erro404Component } from './erro404/erro404.component';
import { FotoService } from '../servicos/foto.service';


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
    FotoAEModule,
    PainelModule,
    router,
    FormsModule
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
