import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ListarHerramientasComponent } from './components/listar-herramientas/listar-herramientas.component';
import PrestamosRouting from './prestamos.routes';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarHerramientasComponent],
  imports: [
    BrowserModule,
    CommonModule,
    PrestamosRouting,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [ListarHerramientasComponent],
})
export class PrestamosModule {}
