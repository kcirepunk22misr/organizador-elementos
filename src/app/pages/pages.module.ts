import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarOComponent } from './actualizar-o/actualizar-o.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { PagesroutingModule } from './pagesrouting.module';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { ReciboPrestamosComponent } from './recibo-prestamos/recibo-prestamos.component';

@NgModule({
  declarations: [ActualizarOComponent, InicioComponent, PropiedadesComponent, ReciboPrestamosComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesroutingModule,
    MomentModule,
    FormsModule,
  ],
})
export class PagesModule {}
