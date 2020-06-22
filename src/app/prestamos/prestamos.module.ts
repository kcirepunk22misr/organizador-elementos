import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ListarHerramientasComponent } from './components/listar-herramientas/listar-herramientas.component';
import PrestamosRouting from './prestamos.routes';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListarHerramientasComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PrestamosRouting,
    ComponentsModule,
    HttpClientModule,
  ],
  exports: [ListarHerramientasComponent],
})
export class PrestamosModule {}
