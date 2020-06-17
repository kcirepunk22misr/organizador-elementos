// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';
import { ActualizarOComponent } from './pages/actualizar-o/actualizar-o.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    InicioComponent,
    ModalRegisterComponent,
    ActualizarOComponent,
    ModalImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
