import { RouterModule, Routes } from '@angular/router';
import { PrestamosHomeComponent } from './prestamos-home.component';
import { ListarHerramientasComponent } from './components/listar-herramientas/listar-herramientas.component';
import { PrestamosModule } from './prestamos.module';

const routes: Routes = [
  {
    path: 'prestamos',
    component: PrestamosHomeComponent,
    children: [{ path: ':id', component: ListarHerramientasComponent }],
  },
];

export default RouterModule.forChild(routes);
