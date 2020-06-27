// Modulos
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

// Componentes
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { TableComponent } from './table/table.component';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';
import { ModalReportsComponent } from './modal-reports/modal-reports.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalImageComponent,
    ModalRegisterComponent,
    TableComponent,
    ModalReportsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MomentModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    HeaderComponent,
    ModalImageComponent,
    ModalRegisterComponent,
    TableComponent,
    ModalReportsComponent,
  ],
})
export class ComponentsModule {}
