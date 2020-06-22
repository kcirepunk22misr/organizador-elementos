// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

// Components
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login/login.component';
import { ComponentsModule } from './components/components.module';
import { PagesComponent } from './pages/pages.component';
import { PrestamosHomeComponent } from './prestamos/prestamos-home.component';
import { PrestamosModule } from './prestamos/prestamos.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    PrestamosHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MomentModule,
    PagesModule,
    ComponentsModule,
    PrestamosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
