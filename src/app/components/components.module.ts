// Modulos
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Componentes
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { TableComponent } from './table/table.component';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalImageComponent,
    ModalRegisterComponent,
    TableComponent,
  ],
  imports: [CommonModule, RouterModule, MomentModule, FormsModule],
  exports: [
    HeaderComponent,
    ModalImageComponent,
    ModalRegisterComponent,
    TableComponent,
  ],
})
export class ComponentsModule {}
