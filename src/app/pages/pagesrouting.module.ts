import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ActualizarOComponent } from './actualizar-o/actualizar-o.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { ReciboPrestamosComponent } from './recibo-prestamos/recibo-prestamos.component';
import { DeletePropiedadComponent } from './delete-propiedad/delete-propiedad.component';
import { RegisterToolComponent } from './register-tool/register-tool.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: InicioComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'propiedades/:propiedad', component: PropiedadesComponent },
      {
        path: 'delete-propiedades/:propiedad',
        component: DeletePropiedadComponent,
      },
      { path: 'actualizar/:id', component: ActualizarOComponent },
      { path: 'recibo/:id', component: ReciboPrestamosComponent },
      { path: 'registrar', component: RegisterToolComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesroutingModule {}
